Add-Type -AssemblyName System.Drawing

$baseDir = Split-Path -Parent $PSScriptRoot
$logoPath = Join-Path $baseDir "assets\kibotics-logo.png"

$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;

public class ImageHelper
{
    public static void CropSquare(string srcPath, string destPath, int centerX, int centerY, int boxSize, int outSize)
    {
        using (Bitmap src = new Bitmap(srcPath))
        using (Bitmap dest = new Bitmap(outSize, outSize, PixelFormat.Format32bppArgb))
        using (Graphics g = Graphics.FromImage(dest))
        {
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.SmoothingMode = SmoothingMode.HighQuality;
            g.PixelOffsetMode = PixelOffsetMode.HighQuality;
            g.CompositingQuality = CompositingQuality.HighQuality;

            int srcX = centerX - boxSize / 2;
            int srcY = centerY - boxSize / 2;

            g.DrawImage(src, new Rectangle(0, 0, outSize, outSize), srcX, srcY, boxSize, boxSize, GraphicsUnit.Pixel);
            dest.Save(destPath, ImageFormat.Png);
        }
    }

    public static void MakeTransparent(string srcPath, string destPath, byte bgR, byte bgG, byte bgB, int threshold1, int threshold2)
    {
        using (Bitmap src = new Bitmap(srcPath))
        {
            Bitmap dest = new Bitmap(src.Width, src.Height, PixelFormat.Format32bppArgb);
            BitmapData srcData = src.LockBits(new Rectangle(0, 0, src.Width, src.Height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            BitmapData destData = dest.LockBits(new Rectangle(0, 0, dest.Width, dest.Height), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

            int bytes = Math.Abs(srcData.Stride) * src.Height;
            byte[] buffer = new byte[bytes];
            byte[] outBuffer = new byte[bytes];

            System.Runtime.InteropServices.Marshal.Copy(srcData.Scan0, buffer, 0, bytes);

            for (int i = 0; i < bytes; i += 4)
            {
                byte b = buffer[i];
                byte g = buffer[i + 1];
                byte r = buffer[i + 2];
                byte a = buffer[i + 3];

                if (a == 0)
                {
                    outBuffer[i] = 0;
                    outBuffer[i + 1] = 0;
                    outBuffer[i + 2] = 0;
                    outBuffer[i + 3] = 0;
                    continue;
                }

                int diff = Math.Abs(r - bgR) + Math.Abs(g - bgG) + Math.Abs(b - bgB);

                if (diff <= threshold1)
                {
                    outBuffer[i] = 0;
                    outBuffer[i + 1] = 0;
                    outBuffer[i + 2] = 0;
                    outBuffer[i + 3] = 0;
                }
                else if (diff < threshold2)
                {
                    double factor = (double)(diff - threshold1) / (threshold2 - threshold1);
                    outBuffer[i] = b;
                    outBuffer[i + 1] = g;
                    outBuffer[i + 2] = r;
                    outBuffer[i + 3] = (byte)(factor * 255);
                }
                else
                {
                    outBuffer[i] = b;
                    outBuffer[i + 1] = g;
                    outBuffer[i + 2] = r;
                    outBuffer[i + 3] = 255;
                }
            }

            System.Runtime.InteropServices.Marshal.Copy(outBuffer, 0, destData.Scan0, bytes);
            src.UnlockBits(srcData);
            dest.UnlockBits(destData);

            dest.Save(destPath, ImageFormat.Png);
            dest.Dispose();
        }
    }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing

# Center of head is X=483, Y=455. Bounding box is ~517x509.
# With slight breathing room, box size 580.
$iconCrop = Join-Path $baseDir "assets\kibotics-icon.png"
$iconTrans = Join-Path $baseDir "assets\kibotics-icon-transparent.png"
$logoTrans = Join-Path $baseDir "assets\kibotics-logo-transparent.png"
$favicon64 = Join-Path $baseDir "favicon.png"
$favicon192 = Join-Path $baseDir "assets\favicon-192.png"
$favicon512 = Join-Path $baseDir "assets\favicon-512.png"

[ImageHelper]::CropSquare($logoPath, $iconCrop, 483, 455, 580, 512)
[ImageHelper]::CropSquare($logoPath, $favicon64, 483, 455, 580, 64)
[ImageHelper]::CropSquare($logoPath, $favicon192, 483, 455, 580, 192)
[ImageHelper]::CropSquare($logoPath, $favicon512, 483, 455, 580, 512)

# Make transparent versions
[ImageHelper]::MakeTransparent($iconCrop, $iconTrans, 35, 39, 50, 15, 45)
[ImageHelper]::MakeTransparent($logoPath, $logoTrans, 35, 39, 50, 15, 45)

Write-Host "All assets generated successfully."

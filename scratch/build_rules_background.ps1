Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg"
$outPath = "src/assets/images/sections/rules-background.jpg"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Cell 04 in 1024x682 board:
# X: 0, Y: 228, Width: 341, Height: 227
# Crop Cell 04
$rectCell4 = New-Object System.Drawing.Rectangle(0, 228, 341, 227)
$cell4Bmp = $bmp.Clone($rectCell4, $bmp.PixelFormat)

# High-resolution retina upscale to 1440 x 960
$targetW = 1440
$targetH = 960
$outBmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$g.DrawImage($cell4Bmp, 0, 0, $targetW, $targetH)

# Feather the left mockup text (X: 0 to 450 solid #020604, feather from 450 to 720)
# Leaving X: 720 to 1440 completely pure, untouched artwork!
$voidColor = [System.Drawing.Color]::FromArgb(255, 2, 6, 4)
$solidBrush = New-Object System.Drawing.SolidBrush($voidColor)
$g.FillRectangle($solidBrush, 0, 0, 450, $targetH)

for ($x = 450; $x -lt 720; $x++) {
    $ratio = ($x - 450) / (720 - 450)
    $alpha = [int](255 * (1.0 - [Math]::Pow($ratio, 1.4)))
    if ($alpha -gt 0) {
        $blendColor = [System.Drawing.Color]::FromArgb($alpha, 2, 6, 4)
        $pen = New-Object System.Drawing.Pen($blendColor, 1)
        $g.DrawLine($pen, $x, 0, $x, $targetH)
        $pen.Dispose()
    }
}

$g.Dispose()
$solidBrush.Dispose()
$cell4Bmp.Dispose()
$bmp.Dispose()

$outBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$outBmp.Dispose()

Write-Output "Successfully built and saved high-definition rules-background.jpg to $outPath"

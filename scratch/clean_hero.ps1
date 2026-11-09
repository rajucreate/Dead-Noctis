Add-Type -AssemblyName System.Drawing

$heroPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept.jpg"
$backupPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept-original.jpg"

if (!(Test-Path $backupPath)) {
    Copy-Item $heroPath $backupPath
    Write-Host "Backed up original hero-concept.jpg"
}

$bmp = [System.Drawing.Bitmap]::FromFile($backupPath)
$targetW = $bmp.Width  # 1024
$targetH = $bmp.Height # 576

$outBmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Draw the original image
$g.DrawImage($bmp, 0, 0, $targetW, $targetH)

# Solid obsidian void (#020604) from X = 0 to X = 460
$voidColor = [System.Drawing.Color]::FromArgb(255, 2, 6, 4)
$solidBrush = New-Object System.Drawing.SolidBrush($voidColor)
$g.FillRectangle($solidBrush, 0, 0, 460, $targetH)

# Smooth feathered gradient from X = 460 to X = 600
for ($x = 460; $x -lt 600; $x++) {
    $ratio = ($x - 460) / (600 - 460) # 0 to 1
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
$bmp.Dispose()

# Save cleaned image
$outBmp.Save($heroPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$outBmp.Dispose()

Write-Host "Successfully cleaned hero-concept.jpg! Unwanted left-side image and buttons removed."

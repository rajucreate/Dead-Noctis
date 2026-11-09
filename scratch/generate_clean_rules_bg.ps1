Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Row 1, Col 0:
# X: 2, Y: 245, Width: 338, Height: 206
$rectRules = New-Object System.Drawing.Rectangle(2, 245, 338, 206)
$rulesBmp = $bmp.Clone($rectRules, $bmp.PixelFormat)

$targetW = 1440
$targetH = 880
$highResRules = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($highResRules)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($rulesBmp, 0, 0, $targetW, $targetH)

# Check the artwork in the right half: X from 600 to 1440
# Clean left side (X: 0 to 480) with solid obsidian #020604
# Feather smoothly from X: 480 to 760
$voidColor = [System.Drawing.Color]::FromArgb(255, 2, 6, 4)
$solidBrush = New-Object System.Drawing.SolidBrush($voidColor)
$g.FillRectangle($solidBrush, 0, 0, 480, $targetH)

for ($x = 480; $x -lt 760; $x++) {
    $ratio = ($x - 480) / (760 - 480)
    $alpha = [int](255 * (1.0 - [Math]::Pow($ratio, 1.5)))
    if ($alpha -gt 0) {
        $blendColor = [System.Drawing.Color]::FromArgb($alpha, 2, 6, 4)
        $pen = New-Object System.Drawing.Pen($blendColor, 1)
        $g.DrawLine($pen, $x, 0, $x, $targetH)
        $pen.Dispose()
    }
}

$g.Dispose()
$solidBrush.Dispose()
$rulesBmp.Dispose()
$bmp.Dispose()

$destPath = "src/assets/images/sections/rules-background.jpg"
$highResRules.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$highResRules.Dispose()

Write-Output "Successfully generated perfect rules-background.jpg at $destPath"

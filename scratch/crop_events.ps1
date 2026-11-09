Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg"
$outDir = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\sections"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Source image size: $($bmp.Width) x $($bmp.Height)"

# Cell 3: 03. EVENTS / DETAILS (Col 3, Row 1)
# X: 683, Y: 18, Width: 338, Height: 206
$rectEvents = New-Object System.Drawing.Rectangle(683, 18, 338, 206)
$bmpEvents = $bmp.Clone($rectEvents, $bmp.PixelFormat)

# High-quality bicubic upscaling to 1352 x 824 for crisp retina display
$targetW = 1352
$targetH = 824
$highResEvents = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($highResEvents)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($bmpEvents, 0, 0, $targetW, $targetH)
$g.Dispose()

$destPath = Join-Path $outDir "events-background.jpg"
$highResEvents.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Host "Successfully saved: $destPath"

$bmpEvents.Dispose()
$highResEvents.Dispose()
$bmp.Dispose()

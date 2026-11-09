Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\LENOVO\.gemini\antigravity\brain\d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff\.user_uploaded\media_1794057102960_a77b9aa9.jpg"
$outDir = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\sections"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Source image size: $($bmp.Width) x $($bmp.Height)"

# In the 1024x682 board:
# 3 columns, 3 rows.
# Each cell is roughly 341px wide, 227px high.
# Let's inspect the layout of row 1, col 2 (02. ABOUT):
# X: from ~341 to ~682
# Y: from ~0 to ~227

# In Cell 2 (02. ABOUT), the top header has "02. ABOUT" title banner (~18px),
# then navbar (~20px), then the scene starts around Y: 38.
# The scene has the text on the left and the cavern/portal background on the right.
# Let's crop the entire cell 2 artwork (X: 342, Y: 18, Width: 338, Height: 206)
$rectAbout = New-Object System.Drawing.Rectangle(342, 18, 338, 206)
$bmpAbout = $bmp.Clone($rectAbout, $bmp.PixelFormat)

# Also let's upscale it smoothly 3x or 4x for high-res web display (e.g. 1352 x 824)
$targetW = 1352
$targetH = 824
$highResAbout = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($highResAbout)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($bmpAbout, 0, 0, $targetW, $targetH)
$g.Dispose()

$destPath = Join-Path $outDir "about-background.jpg"
$highResAbout.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Host "Successfully saved: $destPath"

$bmpAbout.Dispose()
$highResAbout.Dispose()
$bmp.Dispose()

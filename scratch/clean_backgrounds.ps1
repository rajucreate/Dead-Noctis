Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg"
$outDir = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\sections"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# In the 1024x682 board:
# Cell 2 (02. ABOUT): X: 342, Y: 18, Width: 338, Height: 206
# The artwork (cavern, monolith, floating islands) is on the right side of cell 2:
# X from ~480 to 678 (width ~200px)
# Let's crop cell 2:
$rectCell2 = New-Object System.Drawing.Rectangle(342, 18, 338, 206)
$cell2Bmp = $bmp.Clone($rectCell2, $bmp.PixelFormat)

# Now, in cell 2, let's upscale to 1440 x 880
$targetW = 1440
$targetH = 880
$outBmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($cell2Bmp, 0, 0, $targetW, $targetH)

# Now, paint pure obsidian black (#020604) over the left half where the baked-in storyboard text was!
# Specifically, from X = 0 to X = 650 is pure solid #020604.
# From X = 650 to X = 950 is a smooth multi-stop gradient fade from #020604 to transparent!
$voidColor = [System.Drawing.Color]::FromArgb(255, 2, 6, 4)
$solidBrush = New-Object System.Drawing.SolidBrush($voidColor)
$g.FillRectangle($solidBrush, 0, 0, 640, $targetH)

# Smooth gradient transition across 640 to 920
for ($x = 640; $x -lt 920; $x++) {
    $ratio = ($x - 640) / (920 - 640) # 0 to 1
    # Alpha of the black overlay goes from 255 (opaque) down to 0 (transparent)
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

$destAbout = Join-Path $outDir "about-background.jpg"
$outBmp.Save($destAbout, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Host "Cleaned about-background.jpg successfully saved!"

$outBmp.Dispose()
$cell2Bmp.Dispose()

# Now do the exact same clean treatment for events-background.jpg!
# Cell 3 (03. EVENTS / DETAILS): X: 683, Y: 18, Width: 338, Height: 206
$rectCell3 = New-Object System.Drawing.Rectangle(683, 18, 338, 206)
$cell3Bmp = $bmp.Clone($rectCell3, $bmp.PixelFormat)

$outEvents = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g3 = [System.Drawing.Graphics]::FromImage($outEvents)
$g3.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g3.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g3.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g3.DrawImage($cell3Bmp, 0, 0, $targetW, $targetH)

$solidBrush3 = New-Object System.Drawing.SolidBrush($voidColor)
$g3.FillRectangle($solidBrush3, 0, 0, 640, $targetH)

for ($x = 640; $x -lt 920; $x++) {
    $ratio = ($x - 640) / (920 - 640)
    $alpha = [int](255 * (1.0 - [Math]::Pow($ratio, 1.5)))
    if ($alpha -gt 0) {
        $blendColor = [System.Drawing.Color]::FromArgb($alpha, 2, 6, 4)
        $pen = New-Object System.Drawing.Pen($blendColor, 1)
        $g3.DrawLine($pen, $x, 0, $x, $targetH)
        $pen.Dispose()
    }
}

$g3.Dispose()
$solidBrush3.Dispose()

$destEvents = Join-Path $outDir "events-background.jpg"
$outEvents.Save($destEvents, [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Host "Cleaned events-background.jpg successfully saved!"

$outEvents.Dispose()
$cell3Bmp.Dispose()
$bmp.Dispose()

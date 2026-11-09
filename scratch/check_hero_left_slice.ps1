Add-Type -AssemblyName System.Drawing

$heroPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($heroPath)

# Crop the left 30% of hero-concept.jpg
$rect = New-Object System.Drawing.Rectangle(0, 0, 300, $bmp.Height)
$crop = $bmp.Clone($rect, $bmp.PixelFormat)
$outPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\scratch\hero_left_slice.png"
$crop.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved hero_left_slice.png"

$crop.Dispose()
$bmp.Dispose()

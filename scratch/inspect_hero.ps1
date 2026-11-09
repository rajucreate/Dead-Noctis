Add-Type -AssemblyName System.Drawing

$heroPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($heroPath)
Write-Output "hero-concept.jpg size: $($bmp.Width) x $($bmp.Height)"

# Also let's check what other image files exist in src/assets/images
Get-ChildItem -Path "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images" -Recurse -File | ForEach-Object {
    Write-Output "$($_.FullName) - $($_.Length) bytes"
}

$bmp.Dispose()

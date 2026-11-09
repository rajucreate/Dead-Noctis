Add-Type -AssemblyName System.Drawing

$aboutPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\sections\about-background.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($aboutPath)
Write-Output "about-background.jpg dimensions: $($bmp.Width) x $($bmp.Height)"
$bmp.Dispose()

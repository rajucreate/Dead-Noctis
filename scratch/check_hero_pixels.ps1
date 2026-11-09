Add-Type -AssemblyName System.Drawing

$heroPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($heroPath)

# Check average brightness/colors across horizontal strips
# E.g. at X = 0, 50, 100, 200, 300, 400, 500
for ($x = 0; $x -lt $bmp.Width; $x += 50) {
    $sum = 0
    for ($y = 0; $y -lt $bmp.Height; $y += 20) {
        $c = $bmp.GetPixel($x, $y)
        $sum += ($c.R + $c.G + $c.B)
    }
    $avg = [int]($sum / ($bmp.Height / 20))
    Write-Output "X = $x, Avg brightness = $avg"
}

$bmp.Dispose()

Add-Type -AssemblyName System.Drawing

$heroPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($heroPath)

for ($x = 250; $x -lt 650; $x += 25) {
    $sum = 0
    for ($y = 0; $y -lt $bmp.Height; $y += 10) {
        $c = $bmp.GetPixel($x, $y)
        $sum += ($c.R + $c.G + $c.B)
    }
    $avg = [int]($sum / ($bmp.Height / 10))
    Write-Output "X = $x, avg = $avg"
}

$bmp.Dispose()

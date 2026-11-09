Add-Type -AssemblyName System.Drawing

$slicePath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\scratch\hero_left_slice.png"
$bmp = [System.Drawing.Bitmap]::FromFile($slicePath)

for ($y = 0; $y -lt $bmp.Height; $y += 40) {
    for ($x = 0; $x -lt $bmp.Width; $x += 40) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 50 -or $c.G -gt 50 -or $c.B -gt 50) {
            Write-Output "Found bright pixel at ($x, $y): R=$($c.R), G=$($c.G), B=$($c.B)"
        }
    }
}

$bmp.Dispose()

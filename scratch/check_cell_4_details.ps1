Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_4.jpg")

# In cell_4 (341 x 227):
# Left half (X: 0..160): The rules title and rules list
# Right half (X: 160..341): The 3D artwork!
Write-Output "Sampling right half of cell_4..."
for ($x = 160; $x -lt $bmp.Width; $x += 20) {
    for ($y = 20; $y -lt $bmp.Height; $y += 30) {
        $c = $bmp.GetPixel($x, $y)
        Write-Output "X=$x, Y=$y : RGB=($($c.R), $($c.G), $($c.B))"
    }
}
$bmp.Dispose()

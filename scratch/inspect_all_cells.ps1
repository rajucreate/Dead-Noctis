Add-Type -AssemblyName System.Drawing

for ($idx = 1; $idx -le 9; $idx++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_$($idx).jpg")
    # Sample top-left where the cell label usually is: Y around 10..25, X around 10..150
    $labelPixels = 0
    for ($x = 10; $x -lt 150; $x++) {
        for ($y = 5; $y -lt 30; $y++) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 150 -and $c.G -gt 150 -and $c.B -gt 150) {
                $labelPixels++
            }
        }
    }
    # Check max brightness on right side (artwork)
    $maxR = 0; $maxG = 0; $maxB = 0
    for ($x = 180; $x -lt $bmp.Width; $x += 4) {
        for ($y = 20; $y -lt $bmp.Height; $y += 4) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.G -gt $maxG) { $maxG = $c.G; $maxR = $c.R; $maxB = $c.B }
        }
    }
    Write-Output "Cell $idx : labelPixels=$labelPixels, Right max RGB=($maxR, $maxG, $maxB)"
    $bmp.Dispose()
}

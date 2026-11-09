Add-Type -AssemblyName System.Drawing

for ($idx = 4; $idx -le 6; $idx++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_$($idx).jpg")
    Write-Output "--- CELL $idx ---"
    # Find bright green / glowing regions: X > 150
    $artPixels = 0
    for ($x = 150; $x -lt $bmp.Width; $x += 2) {
        for ($y = 10; $y -lt $bmp.Height; $y += 2) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.G -gt 60 -and $c.G -gt ($c.R * 1.2)) {
                $artPixels++
            }
        }
    }
    Write-Output "Green artwork pixels in right half: $artPixels"
    $bmp.Dispose()
}

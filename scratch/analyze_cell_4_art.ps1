Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_4.jpg")

Write-Output "Cell 4 dimensions: $($bmp.Width) x $($bmp.Height)"

# Let's inspect what is on the right side of cell_4 (X: 160 to 341)
# What is the brightest feature, where is it, what color is it?
$features = @()
for ($x = 160; $x -lt $bmp.Width; $x += 10) {
    for ($y = 20; $y -lt $bmp.Height; $y += 10) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.G -gt 80 -or $c.R -gt 80) {
            $features += [PSCustomObject]@{ X = $x; Y = $y; R = $c.R; G = $c.G; B = $c.B }
        }
    }
}

Write-Output "Found $($features.Count) bright feature sample points on right side."
$features | Sort-Object -Property G -Descending | Select-Object -First 10 | Format-Table -AutoSize
$bmp.Dispose()

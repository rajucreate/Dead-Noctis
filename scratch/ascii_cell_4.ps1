Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_4.jpg")
Write-Output "Size: $($bmp.Width) x $($bmp.Height)"

# Let's inspect the pixels across cell_4
# In cell_4, where is the artwork?
for ($y = 10; $y -lt $bmp.Height; $y += 20) {
    $line = ""
    for ($x = 10; $x -lt $bmp.Width; $x += 20) {
        $c = $bmp.GetPixel($x, $y)
        $avg = [int](($c.R + $c.G + $c.B) / 3)
        if ($avg -lt 15) { $line += " " }
        elseif ($avg -lt 50) { $line += "." }
        elseif ($avg -lt 120) { $line += "*" }
        else { $line += "#" }
    }
    Write-Output $line
}
$bmp.Dispose()

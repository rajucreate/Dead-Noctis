Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("src/assets/images/sections/rules-background.jpg")
Write-Output "rules-background.jpg size: $($bmp.Width) x $($bmp.Height)"

# Sample horizontal pixels at Y=440 (middle height)
for ($x = 0; $x -lt $bmp.Width; $x += 100) {
    $c = $bmp.GetPixel($x, 440)
    Write-Output "X=$x : R=$($c.R), G=$($c.G), B=$($c.B)"
}

# Find maximum brightness across the entire image
$maxBright = 0; $maxPos = ""
for ($x = 0; $x -lt $bmp.Width; $x += 10) {
    for ($y = 0; $y -lt $bmp.Height; $y += 10) {
        $c = $bmp.GetPixel($x, $y)
        $b = $c.R + $c.G + $c.B
        if ($b -gt $maxBright) {
            $maxBright = $b
            $maxPos = "X=$x, Y=$y (R=$($c.R), G=$($c.G), B=$($c.B))"
        }
    }
}
Write-Output "Max brightness: $maxPos"
$bmp.Dispose()

Add-Type -AssemblyName System.Drawing

$heroPath = "C:\Users\LENOVO\OneDrive\Documents\Dead Notics\src\assets\images\hero\hero-concept.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($heroPath)

# Sample pixels in the rectangle X: 50..300, Y: 100..450
# Let's count how many non-black pixels exist
$brightCount = 0
for ($x = 20; $x -lt 350; $x += 5) {
    for ($y = 50; $y -lt 500; $y += 5) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 30 -or $c.G -gt 30 -or $c.B -gt 30) {
            $brightCount++
        }
    }
}
Write-Output "Bright pixels in left half: $brightCount"
$bmp.Dispose()

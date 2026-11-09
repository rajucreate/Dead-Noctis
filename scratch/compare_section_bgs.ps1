Add-Type -AssemblyName System.Drawing

$sections = @("about-background.jpg", "events-background.jpg", "rules-background.jpg")

foreach ($s in $sections) {
    $path = "src/assets/images/sections/$s"
    $bmp = [System.Drawing.Bitmap]::FromFile($path)
    Write-Output "=== $s === (Size: $($bmp.Width) x $($bmp.Height))"
    
    # Check brightness across the right half (X from 700 to 1400)
    $brightCount = 0
    for ($x = 700; $x -lt $bmp.Width; $x += 10) {
        for ($y = 100; $y -lt $bmp.Height - 100; $y += 10) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.G -gt 40) { $brightCount++ }
        }
    }
    Write-Output "Bright green pixels in artwork area: $brightCount"
    $bmp.Dispose()
}

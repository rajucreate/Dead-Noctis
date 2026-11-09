Add-Type -AssemblyName System.Drawing

for ($idx = 1; $idx -le 9; $idx++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_$($idx).jpg")
    
    # Save a high-contrast binary version of the top area (Y: 10 to 80, X: 10 to 250)
    $w = 240
    $h = 70
    $threshBmp = New-Object System.Drawing.Bitmap($w, $h)
    for ($x = 0; $x -lt $w; $x++) {
        for ($y = 0; $y -lt $h; $y++) {
            $c = $bmp.GetPixel($x + 10, $y + 10)
            $lum = ($c.R * 0.3) + ($c.G * 0.59) + ($c.B * 0.11)
            if ($lum -gt 85) {
                $threshBmp.SetPixel($x, $y, [System.Drawing.Color]::White)
            } else {
                $threshBmp.SetPixel($x, $y, [System.Drawing.Color]::Black)
            }
        }
    }
    $threshBmp.Save("scratch/thresh_title_$($idx).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $threshBmp.Dispose()
    $bmp.Dispose()
    Write-Output "Saved thresh_title_$idx.png"
}

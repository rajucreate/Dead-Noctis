Add-Type -AssemblyName System.Drawing

for ($idx = 1; $idx -le 9; $idx++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_title_$($idx).png")
    # Sample line by line to see ascii text shape
    Write-Output "=== CELL $idx ==="
    for ($y = 2; $y -lt 25; $y += 3) {
        $row = ""
        for ($x = 5; $x -lt 140; $x += 3) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 130 -and $c.G -gt 130 -and $c.B -gt 130) { $row += "#" }
            elseif ($c.R -gt 60 -and $c.G -gt 60) { $row += "." }
            else { $row += " " }
        }
        if ($row.Trim().Length -gt 0) {
            Write-Output "Y=$y : $row"
        }
    }
    $bmp.Dispose()
}

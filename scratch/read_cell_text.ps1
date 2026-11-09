Add-Type -AssemblyName System.Drawing

for ($idx = 4; $idx -le 6; $idx++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_$($idx).jpg")
    Write-Output "=== CELL $idx ==="
    for ($y = 20; $y -lt 55; $y += 2) {
        $row = ""
        for ($x = 10; $x -lt 220; $x += 2) {
            $c = $bmp.GetPixel($x, $y)
            $lum = ($c.R + $c.G + $c.B) / 3
            if ($lum -gt 150) { $row += "#" }
            elseif ($lum -gt 70) { $row += "." }
            else { $row += " " }
        }
        if ($row.Trim().Length -gt 0) {
            Write-Output "Y=$y : $row"
        }
    }
    $bmp.Dispose()
}

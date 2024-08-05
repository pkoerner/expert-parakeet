Get-Content .env | foreach {
  if ($_.StartsWith('#') || !$_.Contains('=')) {
    continue
  }

  $name, $value = $_.Split('=')
  $name = $name.Trim()
  $value = $value.Trim()
  if ([string]::IsNullOrWhiteSpace($name)) {
    continue
  }

  Write-Host "Setting $name"
  Set-Content env:\$name $value
}

Write-Host "-------------------------------------"
Write-Host " Resetting Git configuration..."
Write-Host "-------------------------------------"

# Remove .git directory
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
    Write-Host "✅ .git directory removed."
} else {
    Write-Host "⚠️ No .git directory found."
}

# Reinitialize git
git init
git add .
git commit -m "Initial commit"
Write-Host "✅ Git reinitialized and initial commit created."

# Prompt for new GitHub remote URL
$remoteUrl = Read-Host "🌐 Enter new GitHub remote URL (e.g. https://github.com/yourname/newrepo.git)"
git remote add origin $remoteUrl

# Push to new remote
git push -u origin main
Write-Host "-------------------------------------"
Write-Host "✅ Repo has been reset and pushed to:"
Write-Host "$remoteUrl"
Write-Host "-------------------------------------"

@echo off
REM Deploy to GitHub Pages
REM Usage: deploy.bat

echo Building project...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Build failed!
    exit /b 1
)

echo Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% neq 0 (
    echo Deploy failed!
    exit /b 1
)

echo.
echo Done! Site will be available at:
echo https://farfurix.github.io/gh-pages/

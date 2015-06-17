set PATH=%PATH%;%appdata%\npm
cd C:\Users\arpit.bhatt\Desktop\jenkins-grunt
npm install &&^
bower install --dev &&^
grunt cibuild &&^
echo "chal gaya"

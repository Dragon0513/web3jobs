# web3jobs
Web 3.0 job board for the future of the 🌎🌍🌏

# Setup
1. Install CRACO `npm install @craco/craco`
1. rename the `.envExample` file to `.env`
1. add the supabase URL and `anon public` API key
![image](https://user-images.githubusercontent.com/5667044/137568563-731c2a54-30d2-4ef2-8f90-fe9e4b078dbf.png)

# Running
Normal ass `npm run start` and BOOM 💥!
______________
# Testing
* We have set it up to create a snapshot
* If the test are failing and complaining about the snapshot not matching the stored snapshot you need to run the `npm run test:update` script
  * this will update the snapshot and, hopefully, make the tests start running again

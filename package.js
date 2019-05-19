const cp = require('child_process')

const req = async module => {
  try {
    require.resolve(module)
  } catch (e) {
    console.log(`Could not resolve "${module}"\nInstalling`)
    cp.execSync(`npm install ${module}`)
    await setImmediate(() => {})
    console.log(`"${module}" has been installed`)
  }
  console.log(`Requiring "${module}"`)
  try {
    return require(module)
  } catch (e) {
    console.log(`Could not include "${module}". Restart the script`)
    process.exit(1)
  }
}

const main = async () => {
  const request         = await req('request')
  const ms              = await req('ms')
  const fs              = await req('fs')
  const mathjs          = await req('mathjs')
  const figlet          = await req('figlet')
  const snekfetch       = await req('snekfetch')
  const customtranslate = await req('custom-translate')
  const weatherjs       = await req('weather-js')
  const google          = await req('google')

}

main()

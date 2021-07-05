const { 
  freemem, totalmem, arch, 
  endianness, platform, type, 
  uptime, version, hostname 
} = require('os')

setInterval(() => {
  const total = parseInt(totalmem()/1024/1024) // Converter para Mega bytes
  const mem = parseInt(freemem()/1024/1024) // Converter para Mega bytes
  const percents = parseInt((mem/total)*100) // Converter para Mega bytes
  const activeMinutes = parseInt(uptime()/60) // Converter para minutos

  const newDate = new Date()
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  const seconds = newDate.getSeconds()

  const content = {
    'Operating System Type': type(),
    'Kernel version': version(),
    'Operational system': platform(),
    'CPU architecture': arch(),
    'CPU endianness': endianness(),
    'Hostname': hostname(),
    'Total memory': `${total} MB`,
    'Free memory': `${mem} MB`,
    'Memory in use': `${percents} %`,
    'Uptime': `${activeMinutes} minutos`,
    'Hours': `${hours} h : ${minutes} m : ${seconds} s`
  }

  console.clear()
  console.table( content )  
  console.log( '|-  ^c To exit  -|' ) // Ctrl + c || Command + c
}, 1000)
function tracker_queclink(cadena)
{
  if(cadena.search("RESP:GTMP")>=0 ||cadena.search("BUFF:GTMP")>=0  )
  {
      var datos=cadena.split(',');
      return datos[5];
  }
  else if(cadena.search("RESP:GTSTT")>=0 ||cadena.search("BUFF:GTSTT")>=0  )
  {
      var datos=cadena.split(',');
      return datos[7];
  }
  else if(cadena.search("RESP:GTIGN")>=0 ||cadena.search("BUFF:GTIGN")>=0  )
  {
      var datos=cadena.split(',');
      return datos[6];
  }
  else if(cadena.search("RESP:GTSTR")>=0 ||cadena.search("BUFF:GTSTR")>=0  )
  {
      var datos=cadena.split(',');
      return datos[7];
  }
  else if(cadena.search("RESP:GTIGF")>=0 ||cadena.search("BUFF:GTIGF")>=0  )
  {
      var datos=cadena.split(',');
      return datos[6];
  }
  else if(cadena.search("RESP:GTSTP")>=0 ||cadena.search("BUFF:GTSTP")>=0  )
  {
      var datos=cadena.split(',');
      return datos[7];
  }
  else if(cadena.search("RESP:GTIGL")>=0 ||cadena.search("BUFF:GTIGL")>=0  )
  {
      var datos=cadena.split(',');
      return datos[8];
  }
  else if(cadena.search("RESP:GTDOG")>=0 ||cadena.search("BUFF:GTDOG")>=0  )
  {
      var datos=cadena.split(',');
      return datos[8];
  }
  else if(cadena.search("RESP:GTEPS")>=0 ||cadena.search("BUFF:GTEPS")>=0  )
  {
      var datos=cadena.split(',');
      return datos[8];
  }
  else if(cadena.search("RESP:GTRTL")>=0 ||cadena.search("BUFF:GTRTL")>=0  )
  {
      var datos=cadena.split(',');
      return datos[8];
  }
  else if(cadena.search("RESP:GTERI")>=0 ||cadena.search("BUFF:GTERI")>=0  )
  {
      var datos=cadena.split(',');
      return datos[9];
  }

  
  
}
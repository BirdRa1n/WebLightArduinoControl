
# WebLightArduinoControl

Control lights with Arduino/ESP over the internet.
Using a simple api, control lights or any other Arduino digital port with this application.



[![NativeBase](https://img.shields.io/static/v1?label=NativeBase&message=3.4.9&color=blue)](https://docs.nativebase.io/)
[![Axios](https://img.shields.io/static/v1?label=axios&message=27.2&color=white)](https://axios-http.com/ptbr/docs/intro)


## API Documentation

#### Returns the state of all lamps

```http
  GET get_ligts
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token_auth` | `string` | **Mandatory**.Authentication token to change the state of the lamps |
| `arduino_id` | `string` | **Mandatory**. arduino identification |

#### Change the state of the lamps

```http
  GET /set_lights
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `switch_{$id}`      | `string` | **Mandatory**. switch identification |




## Demo GIF


## Demo GIF

![App Screenshot](https://link.storjshare.io/s/jxan5bf56rg7jwklmc2kaqiaoqsq/projetos/arduinolightcontrolweb/demonstra%C3%A7%C3%A3o%20.gif?wrap=0)
[GIF Vew](https://link.storjshare.io/s/jxan5bf56rg7jwklmc2kaqiaoqsq/projetos/arduinolightcontrolweb/demonstra%C3%A7%C3%A3o%20.gif)


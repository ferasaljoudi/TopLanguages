<div style="width: 100%;">
    <a href="#"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/SVGsHeader/topLanguages.svg" alt="Top Languages" style="width: 100%"></a>
</div>
<br>

<div align="center">

Top Languages Service is a web service that generates a language usage image for a given GitHub username.

</div>

<br>
<div style="width: 100%;">
    <a href="#"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/BrownSVGs/overview.svg" alt="Overview" style="width: 100%"></a>
</div>
<br>

The service provides an API endpoint that returns an image showing the most used programming languages of a specified GitHub user, including both forked and not forked repositories.

### Parameters:

- `username` (required): The GitHub username for which to generate the language usage image.
- `format` (optional): The format of the image. Valid options are `list` or `chart`. If you choose not to select one, the default is `chart`.
- `titleColor` (optional): The color of the image title in hex format. Default is `#FFFFFF`.
- `backgroundColor` (optional): The background color of the chart in hex format. Default is `#0d1117`.

<br>
<div style="width: 100%;">
    <a href="#"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/BrownSVGs/technologiesUsed.svg" alt="Technologies Used" style="width: 100%"></a>
</div>
<br>

<h2 align = "center">👨‍💻 Languages</h2>

<div align="center">
<table>
  <tr>
    <td>
      <a href="https://www.w3schools.com/js/"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/Languages/Left/javaScript.svg" alt="JavaScript"></a>
    </td>
  </tr>
</table>
</div>

<h2 align = "center">🌐 Web Development</h2>

<div align = "center">
<table>
  <tr>
    <td>
      <a href="https://www.npmjs.com/"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/WebDevelopment/Right/npm.svg" alt="NPM"></a>
      <br>
      <a href="https://nodejs.org/en"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/WebDevelopment/Right/nodeJs.svg" alt="Node Js"></a>
    </td>
  </tr>
</table>
</div>

<h2 align = "center">💻 Tools and Platforms</h2>

<div align = "center">
<table>
  <tr>
    <td>
      <a href="https://code.visualstudio.com/"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/ToolsAndPlatforms/Left/vsCode.svg" alt="VS CODE"></a>
      <br>
      <a href="https://www.docker.com/"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/ToolsAndPlatforms/Middle/docker.svg" alt="Docker"></a>
      <br>
      <a href="https://casaos.io/"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/ToolsAndPlatforms/Right/casaOs.svg" alt="Casa Os"></a>
    </td>
  </tr>
</table>
</div>

<h2 align = "center">⚙️ Hardware Development</h2>

<div align = "center">
<table>
  <tr>
    <td>
      <a href="https://www.raspberrypi.com/"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/Badges/Hardware/Right/raspberryPi.svg" alt="RASPBERRY PI"></a>
    </td>
  </tr>
</table>
</div>

<br>
<div style="width: 100%;">
    <a href="#"><img src="https://raw.githubusercontent.com/ferasaljoudi/AssetsRepository/main/BrownSVGs/requestDemonstrations.svg" alt="Request Demonstrations" style="width: 100%"></a>
</div>
<br>

## Default request:

Replace the `username` value with your github username
```sh
![Most Used Languages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi)
```
### Demo:

![Most Used Languages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi)

## Format request:

`format` value can be `chart`, which is the default, or `list` as the below example

Replace the `username` value with your github username

```sh
![Most Used Languages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi&format=list)
```
### Demo:

![Most Used Languages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi&format=list)

## Color request:

`titleColor` and `backgroundColor` can be applied to both `chart` and `list` format

Replace the `username` value with your github username

Replace the `titleColor` and `backgroundColor` values with the color of your choice

```sh
![Most Used Languages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi&format=list&titleColor=1E90F0&backgroundColor=000020)
```
### Demo:

![Most Used Languages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi&format=list&titleColor=1E90F0&backgroundColor=000020)
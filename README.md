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


<!-- <div style="width: 100%;">

![Feras' MostUsedLanguages](https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi&format=list)

</div> -->

```sh
https://aljoudi-service.csproject.org/api/top-langs/image?username=ferasaljoudi
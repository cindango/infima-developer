<script>
import logo from './infima_developer.svg';
</script>

<img class="logo-desktop" src={logo} width="218" height="24" alt="Infima" />
<img class="logo-mobile" src={logo} width="182" height="20" alt="Infima" />

<style>
  .logo-desktop {
    display: none;
  }
  .logo-mobile {
    display: block;
  }
@media (min-width:820px) {
  .logo-desktop {
    display: block;
  }
  .logo-mobile {
    display: none;
  }
}
</style>

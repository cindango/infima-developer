<script>
  import { onMount } from "svelte";
  import redocOptions from "./redocOptions";

  onMount(() => {
    Redoc.init(
      "api.yaml",
      redocOptions,
      document.getElementById("tvl-api-docs")
    );
  });

</script>

<svelte:head>
  <title>Infima Developer | API Docs</title>
</svelte:head>

<style>
main {
  padding-bottom: 0 !important;
}
#tvl-api-docs {
  word-break: break-word;
}
:global(.menu-content) {
}
:global(.redoc-json code) {
  background-color: transparent;
}
:global(#tvl-api-docs h1) {
  font-size: 2em;
  margin-bottom: 1rem;
}

:global(#tvl-api-docs .api-info h1) {
  font-size: 2.75em;
  margin-top: 90px;
}

:global(#tvl-api-docs .api-content h5) {
  color: #fff;
}

:global(#tvl-api-docs .api-content h5 span) {
  color: #ddd;
}

:global(#tvl-api-docs div[role=search]) {
  margin-top: 4em;
  margin-bottom: 20px;
}

:global(#tvl-api-docs div[role=search] i) {
  font-size: 30px;
  line-height: 32px;
  margin-right: 12px;
  color: #aaa;
}

:global(#tvl-api-docs div[role=search] svg) {
  margin-left: 13px;
  margin-top: 3px;
  opacity: .3;
}

:global(#tvl-api-docs .search-input) {
  border: 0;
  background-color: rgba(255,255,255,.05);
  border-radius: 18px;
  font-weight: 400;
  font-size: 15px;
  padding-left: 35px;
}

:global(.scrollbar-container li) {
  margin-left: 0;
}

:global(.scrollbar-container > ul) {

}

:global(.scrollbar-container label) {
}

:global(.scrollbar-container label.-depth1) {
  font-weight: 600;
}

:global(.scrollbar-container label.-depth2) {
  line-height: 1.3em;
}

:global(.scrollbar-container label.-depth1:hover) {
  background-color: transparent;
}

:global(.scrollbar-container label.active) {
  background-color: transparent;
  color: var(--primary-color-link);
}

:global(.react-tabs__tab-panel) {
}

:global(.api-content button) {
  border: 0 !important;
  border-radius: 0;
}

:global(.api-content h3) {
  margin-top: 2.5em;
  margin-bottom: 1.5em;
  font-weight: 500;
}

:global(.react-tabs__tab-list li) {
  border-radius: 2px !important;
  border: 0 !important;
  margin-bottom: 12px !important;
  margin-left: 5px !important;
  color: #555555 !important;
}

:global(.react-tabs__tab-list li.react-tabs__tab--selected) {
  color: #000 !important;
}

:global(.api-content pre) {
  margin-top: 1em;
  border-radius: 6px !important;
  background: transparent;
  box-shadow: none;
}

:global(.react-tabs__tab-panel button) {
  font-size: 14px !important;
}

:global(a[href*="redoc"]) {
  display: none !important;
}


:global(li[data-item-id="group/Products"] span[type="get"]) {
  padding: 4px;
  height: fit-content;
  line-height: 9px;
  font-size: 10px;
  font-family: 'Barlow', Helvetica, Arial;
  font-weight: bold;
  border-radius: 2px;
}

:global(button[aria-label*="expand"] svg) {
  display: inline;
}

:global(.api-content span[type="get"]) {
  border-radius: 2px;
  font-weight: 600;
}

:global(a::before) {
  filter: invert();
}

:global(#tvl-api-docs .bhnnhf > span) {
    color: black;
}

:global(#tvl-api-docs .api-content table tr) {
  background-color: transparent;
}

:global(#tvl-api-docs .api-content .kqeeTF table tr:nth-child(2n)) {
  background-color: rgba(255,255,255,.05);
}

:global(#tvl-api-docs .api-content table th) {
  text-transform: uppercase;
}

:global(#tvl-api-docs .api-content .kqeeTF table th), :global(#tvl-api-docs .api-content .kqeeTF table td) {
  border: 1px solid rgba(255,255,255,.15);
}

</style>

<div class="content">
  <div id="tvl-api-docs" />
</div>

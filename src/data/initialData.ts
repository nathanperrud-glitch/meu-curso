import { CreativeVideo, ImageSlot, PricingPlan, StrategistPreset } from '../types';

export const INITIAL_IMAGE_SLOTS: ImageSlot[] = [
  {
    key: 'hero_01',
    label: 'Hero 01 - Clone Pessoal UGC',
    category: 'hero',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxOTJ6M9futfiqRWlexHAZ8l6nyVaronf8qglJUNYGmtjrzQbM8XF_du5bHvVO4lzQ-rJC-j3RAKIIzgDcyacvHE91A-do7YpDZJ5ZLAPlriq7fRYtp5AhXc-tsl3shf6_esdPJ513QFAyLgpQZVFF3rcNEhpC4Aydf16V9vrZ-lhDX3sIEDXa9MCs2ApfYqW3U9c7N0bqSTo4zBGfsdheAw5DJkkqMs16Z-0u4GmAvRNPhNWjryN4',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxOTJ6M9futfiqRWlexHAZ8l6nyVaronf8qglJUNYGmtjrzQbM8XF_du5bHvVO4lzQ-rJC-j3RAKIIzgDcyacvHE91A-do7YpDZJ5ZLAPlriq7fRYtp5AhXc-tsl3shf6_esdPJ513QFAyLgpQZVFF3rcNEhpC4Aydf16V9vrZ-lhDX3sIEDXa9MCs2ApfYqW3U9c7N0bqSTo4zBGfsdheAw5DJkkqMs16Z-0u4GmAvRNPhNWjryN4',
    description: 'Personagem feminina com iluminação natural em formato UGC realista.'
  },
  {
    key: 'hero_02',
    label: 'Hero 02 - Apresentação de Produto',
    category: 'hero',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPPV1xxJPl8SyBtBV4kUjnQL_Gja2uB5AnyLEPtpONJNruo-6JXzOLxm41ZuixT7uG1iLWVVzMto9NfmenEtpz4RPRriV_VpcbYuo1f-3yq314e8zNjp-TjKsjUmfA9jp0YXK4vPVmc1x39aiweb80icR1gQk1BI4XAZfkiTIHAzgNnhjlvZ6xsA24iyxF6s9L6tdjmhM9QDZQtcfctr7K0n8Lgx5fBMTEEWoNUABHCBMVdX2ylWOm',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPPV1xxJPl8SyBtBV4kUjnQL_Gja2uB5AnyLEPtpONJNruo-6JXzOLxm41ZuixT7uG1iLWVVzMto9NfmenEtpz4RPRriV_VpcbYuo1f-3yq314e8zNjp-TjKsjUmfA9jp0YXK4vPVmc1x39aiweb80icR1gQk1BI4XAZfkiTIHAzgNnhjlvZ6xsA24iyxF6s9L6tdjmhM9QDZQtcfctr7K0n8Lgx5fBMTEEWoNUABHCBMVdX2ylWOm',
    description: 'Apresentador masculino em ambiente de escritório demonstrando produto.'
  },
  {
    key: 'hero_03',
    label: 'Hero 03 - Multilíngue Internacional',
    category: 'hero',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0VrPotkDViR6xvT0moAMTOUv7FOy1syGc1-o4Sh51LD9MKp5NSRfK__sjYdrf1CR8ewzd3ln4Iq20XBBSRAaCOgzKpygI1kxjFjLoqzn-t8e5tGhhaTkg6RhcALr4uSmnIGet3uZ8v_BdbBjWIEBdeD2pmZOO6EJwiKra72lgwMU0Rjwk756iScAz0G0JDr9oWRANcMD8NitR7NWOOjDGXjiVkeJRpKejCvRWeXNftoyP27gCbGDS',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0VrPotkDViR6xvT0moAMTOUv7FOy1syGc1-o4Sh51LD9MKp5NSRfK__sjYdrf1CR8ewzd3ln4Iq20XBBSRAaCOgzKpygI1kxjFjLoqzn-t8e5tGhhaTkg6RhcALr4uSmnIGet3uZ8v_BdbBjWIEBdeD2pmZOO6EJwiKra72lgwMU0Rjwk756iScAz0G0JDr9oWRANcMD8NitR7NWOOjDGXjiVkeJRpKejCvRWeXNftoyP27gCbGDS',
    description: 'Criativo com avatar voltado a anúncios em mercados dos EUA e Europa.'
  },
  {
    key: 'formato_ugc',
    label: 'Formato 01 - UGC Realista',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwnTNZ4EL8ykrmzKW2et9S6C_L_6dChOm2QqYZJhBLH5teM6JBfyJ4YVAhqTRfNI7ucEoKCAmPDOb0uT8o6p0rLSgxMKMEP5luxgQUIoK4IcGkKTJzLQCz5WEGYRgO3FpJMaj4W4LLL0dQzB2hrh6Zut8jF718JQ1w9nbFulJW0pO7Sx7mMQ38-3RuB5yOWpZ30htLmzApapdbh0HtoU7W5LBBx2xtRbTsHBf9WSWkSwV4YAiVjDcU',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwnTNZ4EL8ykrmzKW2et9S6C_L_6dChOm2QqYZJhBLH5teM6JBfyJ4YVAhqTRfNI7ucEoKCAmPDOb0uT8o6p0rLSgxMKMEP5luxgQUIoK4IcGkKTJzLQCz5WEGYRgO3FpJMaj4W4LLL0dQzB2hrh6Zut8jF718JQ1w9nbFulJW0pO7Sx7mMQ38-3RuB5yOWpZ30htLmzApapdbh0HtoU7W5LBBx2xtRbTsHBf9WSWkSwV4YAiVjDcU',
    description: 'Personagens digitais em cenas rotineiras de uso do produto com estilo TikTok/Reels.'
  },
  {
    key: 'formato_clone',
    label: 'Formato 02 - Sua Imagem e Voz',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-8pzScUhUHKb7FC8AgOOm5mPGfaTesa5hlGNgW7hUUltHRca19uNz8sEG4PKm8L29fkbIGsj9rmcsGqaE64tJenp6USSBEievxUWZfqCsxYtnFdKNPrHrer_owxENECettBR0NfbK9bY74hUTYxkkgPFLyWC1hSR_Ki-zojcibcrfB7poI4d2p6eheeily6S35CPd416IpHW0wdUyzWw19WgYaRXyG_34GwoSwi9bvMkHcOMxoJEX',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-8pzScUhUHKb7FC8AgOOm5mPGfaTesa5hlGNgW7hUUltHRca19uNz8sEG4PKm8L29fkbIGsj9rmcsGqaE64tJenp6USSBEievxUWZfqCsxYtnFdKNPrHrer_owxENECettBR0NfbK9bY74hUTYxkkgPFLyWC1hSR_Ki-zojcibcrfB7poI4d2p6eheeily6S35CPd416IpHW0wdUyzWw19WgYaRXyG_34GwoSwi9bvMkHcOMxoJEX',
    description: 'Clone de imagem pessoal com fidelidade fotorrealista e sincronia labial.'
  },
  {
    key: 'formato_voz_off',
    label: 'Formato 03 - Voz em Off',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUxb80SgD6BW9U2o4tegIz_CqQ5UGY9G9i-Tsa6ajlOc9dtvHdSlFTBATcFdeRJklg2psMgqBvVctPR2C-RHLdIBFICg46tDO3ryeqY_dWf9H_Lr71BB3ikOraY-e34_arnkpEWW9E4zMKpBGAwmU73O95qAoGW4Qd73TAlafkc9Mo-p875cBU7sIB7odugSMrm5tv6Ss6GFLoS8z-Xf-_kalTAGh1rLe7As7UXXmfP0wHyxkPbpKJ',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUxb80SgD6BW9U2o4tegIz_CqQ5UGY9G9i-Tsa6ajlOc9dtvHdSlFTBATcFdeRJklg2psMgqBvVctPR2C-RHLdIBFICg46tDO3ryeqY_dWf9H_Lr71BB3ikOraY-e34_arnkpEWW9E4zMKpBGAwmU73O95qAoGW4Qd73TAlafkc9Mo-p875cBU7sIB7odugSMrm5tv6Ss6GFLoS8z-Xf-_kalTAGh1rLe7As7UXXmfP0wHyxkPbpKJ',
    description: 'Narração de alta conversão combinada com cenas b-roll criadas em IA.'
  },
  {
    key: 'formato_animados',
    label: 'Formato 04 - Animados 3D',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4uBFwmEtEH1VpI50tr411uwgXcA1oJVJn-cokrkbUA2Q-xSo47HsHtibzeFv5mp5un383c25pJ2A3XTxzuOyaDzFlv86yo564sBXegI3HxUJqExjMkUjXv_jxC2aa1JsKn44a0rxzi9PXFkKOtGAv5POJF08bCgLrkQiLxv00fvAaKSwmiYg0cUPrGvlQDpobVeC6rNWIEsecZFuBIGuvg2XA6KjHRVVZldMhx0KO9Qs3T07EAfJW',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4uBFwmEtEH1VpI50tr411uwgXcA1oJVJn-cokrkbUA2Q-xSo47HsHtibzeFv5mp5un383c25pJ2A3XTxzuOyaDzFlv86yo564sBXegI3HxUJqExjMkUjXv_jxC2aa1JsKn44a0rxzi9PXFkKOtGAv5POJF08bCgLrkQiLxv00fvAaKSwmiYg0cUPrGvlQDpobVeC6rNWIEsecZFuBIGuvg2XA6KjHRVVZldMhx0KO9Qs3T07EAfJW',
    description: 'Animações no estilo 3D Pixar de alto contraste para quebrar o padrão visual do feed.'
  },
  {
    key: 'formato_podcast',
    label: 'Formato 05 - Podcast',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWlFk3sg3K4ZVkO0x93eKjRHNAHXD4XmYD6l38L-zuyBbKRaZmgObfkAo8VZEjM8HTEXPwxRS1PvE2_UFBW70hqni_HZ-n9vtPefurLWmNZBdBGxJW565LvAn9fVzNb8ztspxJVL34Ph_bs8dsP52UzS9lMaAgwOfFPlzPs2d_N4I1lsLCrE1H34P_5hsYH9FedzBXocMhleCk7O0eoQFSWYrhgT_yDPj3-ov-Uicsqwh5XUIwyQaE',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWlFk3sg3K4ZVkO0x93eKjRHNAHXD4XmYD6l38L-zuyBbKRaZmgObfkAo8VZEjM8HTEXPwxRS1PvE2_UFBW70hqni_HZ-n9vtPefurLWmNZBdBGxJW565LvAn9fVzNb8ztspxJVL34Ph_bs8dsP52UzS9lMaAgwOfFPlzPs2d_N4I1lsLCrE1H34P_5hsYH9FedzBXocMhleCk7O0eoQFSWYrhgT_yDPj3-ov-Uicsqwh5XUIwyQaE',
    description: 'Cortes com estética de estúdio de podcast e microfones para gerar autoridade.'
  },
  {
    key: 'formato_dualcast',
    label: 'Formato 06 - DualCast',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34v5JK-OjbBXtGux3znCuoFGXwXWgetsDBbmQlZK7jq8-Nbn_2o-jFeKT9Cb_zojCb3hGsNWZFFp-IjWR99Q2So981JlXTovSb54Z4j9CLkFbYaoScPXEHRBbtBIDVR1A21pydm2_BRoCEc0CrU7Efr2nCdDsWbgls2ENus9ajpaWhE9PrbAEauO8hjCANtD_x_qW8XIbkSQEiQz8GmOI3b2kui36Dq2WTVY89WUYpdJqy_ZcsA1w',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34v5JK-OjbBXtGux3znCuoFGXwXWgetsDBbmQlZK7jq8-Nbn_2o-jFeKT9Cb_zojCb3hGsNWZFFp-IjWR99Q2So981JlXTovSb54Z4j9CLkFbYaoScPXEHRBbtBIDVR1A21pydm2_BRoCEc0CrU7Efr2nCdDsWbgls2ENus9ajpaWhE9PrbAEauO8hjCANtD_x_qW8XIbkSQEiQz8GmOI3b2kui36Dq2WTVY89WUYpdJqy_ZcsA1w',
    description: 'Dois personagens conversando no mesmo enquadramento, rebatendo dúvidas.'
  },
  {
    key: 'formato_trends',
    label: 'Formato 07 - Trends',
    category: 'formatos',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6MMWrudGHaZcUiaxKoDrqXv4dSEpr_AKllR6RWEMPC9yUpPL4c4w4Ra7pw-H89FXydavtDa2XlWcAr8dBegldq8ymH4PTn4u2a_ItbOSEwlSJ8NoeawWQxYmZC5UhrLwghghjz6uV9jjjnxyk_m81t8b_QZ51riRoC8PLAGEz9gIxEFuKheehcTK_fQcB0L7rX-LAalXnuQiMpIuwUx4K25lHxWGhAVl4McTirWPSaAdwBL0FULxh',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6MMWrudGHaZcUiaxKoDrqXv4dSEpr_AKllR6RWEMPC9yUpPL4c4w4Ra7pw-H89FXydavtDa2XlWcAr8dBegldq8ymH4PTn4u2a_ItbOSEwlSJ8NoeawWQxYmZC5UhrLwghghjz6uV9jjjnxyk_m81t8b_QZ51riRoC8PLAGEz9gIxEFuKheehcTK_fQcB0L7rX-LAalXnuQiMpIuwUx4K25lHxWGhAVl4McTirWPSaAdwBL0FULxh',
    description: 'Tendências virais com ritmo dinâmico e integração do produto em segundos.'
  },
  {
    key: 'carrossel_01',
    label: 'Campanha Meta 01 - Clone Casual',
    category: 'carrossel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt4XRRVc8ZwsK5YnSv7sE2K-h1nQq-YribV9GIWSZLYmtGrUQrKhTwNqhyNSkVX_CiE_hE4Xt3kZnWJqRyn_BJ8EOrJsRI3_tZnwzTHOGqCDKwOpiE47YtJjTwO5KGjyjbVAXUX1sHl_Mp5kxWtnf5olsosRZftycMZeuke2R1i0xa8_bLJLv9SMXeCyu8JrlvqBiw0Z99ZYPzspnMRtANxvjuOF1tPgIP9WCrao033o6kntKyBhEr',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt4XRRVc8ZwsK5YnSv7sE2K-h1nQq-YribV9GIWSZLYmtGrUQrKhTwNqhyNSkVX_CiE_hE4Xt3kZnWJqRyn_BJ8EOrJsRI3_tZnwzTHOGqCDKwOpiE47YtJjTwO5KGjyjbVAXUX1sHl_Mp5kxWtnf5olsosRZftycMZeuke2R1i0xa8_bLJLv9SMXeCyu8JrlvqBiw0Z99ZYPzspnMRtANxvjuOF1tPgIP9WCrao033o6kntKyBhEr',
    description: 'Clone pessoal gravando de forma orgânica no quarto.'
  },
  {
    key: 'carrossel_02',
    label: 'Campanha Meta 02 - Oferta e Garantia',
    category: 'carrossel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlK1TxdoDkKBZBmx3RA-mjfuv7d_609EJL1WNoUshj09F7poBVm_SqAX4g-NCj89GUbAe8BatYVRgpuyrAHLIa-3N4Ylzq7FxSJ71sQa9goNYocD2nr1K98c2WhsVlqWOMYNt09tz04vn6_hLWVE_tWjZO4MYOoBMOcodYz3mJwCGcceZj4a1_9HGySTlNWzbnKXQyn0iz8MMFHErbFDUGuSTrJ8gD9duOijeYSP4zpabsI9z1kOmQ',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlK1TxdoDkKBZBmx3RA-mjfuv7d_609EJL1WNoUshj09F7poBVm_SqAX4g-NCj89GUbAe8BatYVRgpuyrAHLIa-3N4Ylzq7FxSJ71sQa9goNYocD2nr1K98c2WhsVlqWOMYNt09tz04vn6_hLWVE_tWjZO4MYOoBMOcodYz3mJwCGcceZj4a1_9HGySTlNWzbnKXQyn0iz8MMFHErbFDUGuSTrJ8gD9duOijeYSP4zpabsI9z1kOmQ',
    description: 'Apresentação direta de oferta, preço e política de devolução sem atrito.'
  },
  {
    key: 'carrossel_03',
    label: 'Campanha Meta 03 - Sem Mensalidade',
    category: 'carrossel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Mqf_Eunsev9E7QKnvpS3nnv0OmphCm4GD9dX8OiEKhOdwLjrTFY8ROiUqrMRU34z3naPKhdi5zKzNqmL065OAfzbKYOUrosE_9fC6kcLs6SJiCZ8Xeif9AAfw6bsJ4oFq9O2jip-PbnGe0-imPC9aNKoCAwEQ8Ml4d3wb2THQCCi1QxpyEa82wNlfbbXXKJPk1oatZwl621Fx4M7iLLu9k0pskUPH85V9fDOZYT41MC8rSYMC7Kl',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Mqf_Eunsev9E7QKnvpS3nnv0OmphCm4GD9dX8OiEKhOdwLjrTFY8ROiUqrMRU34z3naPKhdi5zKzNqmL065OAfzbKYOUrosE_9fC6kcLs6SJiCZ8Xeif9AAfw6bsJ4oFq9O2jip-PbnGe0-imPC9aNKoCAwEQ8Ml4d3wb2THQCCi1QxpyEa82wNlfbbXXKJPk1oatZwl621Fx4M7iLLu9k0pskUPH85V9fDOZYT41MC8rSYMC7Kl',
    description: 'Criativo desmistificando custos de assinatura com analogia de recarga.'
  },
  {
    key: 'carrossel_04',
    label: 'Campanha Meta 04 - Novas Ferramentas',
    category: 'carrossel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO2Cnh-h0V2VoYojlR-917q8fJytzFEFzE1J_U3no_r-5d9JXbycchzR6vmkKvbXegh2GYWjsesZzTXVr8NcyBouRIEpSc_lEVtmmMSctZ19GJHy1izwQ6WmWNvODX2JgOPTbY-0IPQHPU68QQ5aD4l42eEShYo13yBhzsOtiGdBgNbgd5IstGpwZTlZFjd8ZJG8TaKVV2ORg_a8o07mxYZ3lxKsiE0iTv3yWiO8I2mX0fyYewO0l1',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO2Cnh-h0V2VoYojlR-917q8fJytzFEFzE1J_U3no_r-5d9JXbycchzR6vmkKvbXegh2GYWjsesZzTXVr8NcyBouRIEpSc_lEVtmmMSctZ19GJHy1izwQ6WmWNvODX2JgOPTbY-0IPQHPU68QQ5aD4l42eEShYo13yBhzsOtiGdBgNbgd5IstGpwZTlZFjd8ZJG8TaKVV2ORg_a8o07mxYZ3lxKsiE0iTv3yWiO8I2mX0fyYewO0l1',
    description: 'Atualização periódica anunciando novos modelos de vídeo adicionados.'
  },
  {
    key: 'carrossel_05',
    label: 'Campanha Meta 05 - Escala de Testes',
    category: 'carrossel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4QZeeLLtzVNJzqgf3dmhLuaIsaFGqt2q_j5CoJPjXRZOUh69ZwtGqxAkoGoX22Z2u66RmsPu6ucHNiRrdmx98DAyHPJvSuEa6qX0g0T4p3UvhOcTDP22ZtoyBzx8BW00nkKnanw_wHlAlCbCGGw7p9SRWedqzDaQVGmuaJQomrisGkdQMERHjR0SpuBAk7epDy2w3lEo8XTeGcs8liZ1PQw0w5597rZtgC1TjQjDEmyIxI37ud-p4',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4QZeeLLtzVNJzqgf3dmhLuaIsaFGqt2q_j5CoJPjXRZOUh69ZwtGqxAkoGoX22Z2u66RmsPu6ucHNiRrdmx98DAyHPJvSuEa6qX0g0T4p3UvhOcTDP22ZtoyBzx8BW00nkKnanw_wHlAlCbCGGw7p9SRWedqzDaQVGmuaJQomrisGkdQMERHjR0SpuBAk7epDy2w3lEo8XTeGcs8liZ1PQw0w5597rZtgC1TjQjDEmyIxI37ud-p4',
    description: 'Estudo de caso escalando 30 criativos por semana para teste de tráfego.'
  },
  {
    key: 'carrossel_06',
    label: 'Campanha Meta 06 - Campanha Internacional',
    category: 'carrossel',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv248WMhYDcASi5gv-QsY9_LhwzDDO8xg-bJZ2xyPSZyoHWGP-lThki9YC-cy5rANcSH3i4GvhGi7tRMO8_XWe5yL1ENG-NnW-bXiMtt-nJz_C-9dvOzAYzDgzWivhKuC7GGypRsu9Vd5cL6UmMljsEKjqU7jK9DDbFvc_dywA-9Uyxz5a7P0NsWhgW9pbk4JiC4HhqJEycblhO4scSAlCgoRGQSh6klCPxwyPDdEYp6m-lDzNohjD',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv248WMhYDcASi5gv-QsY9_LhwzDDO8xg-bJZ2xyPSZyoHWGP-lThki9YC-cy5rANcSH3i4GvhGi7tRMO8_XWe5yL1ENG-NnW-bXiMtt-nJz_C-9dvOzAYzDgzWivhKuC7GGypRsu9Vd5cL6UmMljsEKjqU7jK9DDbFvc_dywA-9Uyxz5a7P0NsWhgW9pbk4JiC4HhqJEycblhO4scSAlCgoRGQSh6klCPxwyPDdEYp6m-lDzNohjD',
    description: 'Anúncio em espanhol nativo para vendas transfronteiriças na Europa.'
  },
  {
    key: 'estudo_caso',
    label: 'Estudo de Caso - Suplemento com IA',
    category: 'estudo',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANpY-XFmVxsZKLtFbwfmmtUzw_0ohshuUU2E8z0BM8uKBumqfC22DnaK6Q-O4wxatu19129Gog7YpHMnepnl-f2MFYFoakkyKFTNk8M3_i_AhSBl_8C5YcIUaHiuInZunOqm_f_hRJqoxJDvrJUCmOBH5avWD9CH00bEF2X-cQSLk2X_e4yQLsTtnMgD5FEsRltz5url48v4ekuWda6iHs40Fk2tg-QfxCxeCe8JK505KMbL4PwnmP',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANpY-XFmVxsZKLtFbwfmmtUzw_0ohshuUU2E8z0BM8uKBumqfC22DnaK6Q-O4wxatu19129Gog7YpHMnepnl-f2MFYFoakkyKFTNk8M3_i_AhSBl_8C5YcIUaHiuInZunOqm_f_hRJqoxJDvrJUCmOBH5avWD9CH00bEF2X-cQSLk2X_e4yQLsTtnMgD5FEsRltz5url48v4ekuWda6iHs40Fk2tg-QfxCxeCe8JK505KMbL4PwnmP',
    description: 'Mulher segurando pote real de colágeno integrado perfeitamente por IA.'
  },
  {
    key: 'plataforma_alunos',
    label: 'Área de Membros - Interface Player',
    category: 'plataforma',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs7ljzZTvXBkhnOhBMArxxSc2DR9ck_Q8EMtslaWF0p7NoNnvG2Sb9CZBL6O0L1VL9u9iBi_DFKwVUbar2ePDkrM1_pNU-auB7AUvDqcKUTjMFG2RW_NR0u63VJEsIobr4uSAhx6dVtALfRpj--JlmbjTG8k0YZLHWl8FSY4vydoTLcn8QIgQXuw8Im5NoIiONtgMoEk-hdiY3od2sFcf_V4nYfdzX7t-Gsqep59XVOnvGlrBBp8Td',
    defaultUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs7ljzZTvXBkhnOhBMArxxSc2DR9ck_Q8EMtslaWF0p7NoNnvG2Sb9CZBL6O0L1VL9u9iBi_DFKwVUbar2ePDkrM1_pNU-auB7AUvDqcKUTjMFG2RW_NR0u63VJEsIobr4uSAhx6dVtALfRpj--JlmbjTG8k0YZLHWl8FSY4vydoTLcn8QIgQXuw8Im5NoIiONtgMoEk-hdiY3od2sFcf_V4nYfdzX7t-Gsqep59XVOnvGlrBBp8Td',
    description: 'Interface de aulas da plataforma com player e lista de downloads.'
  }
];

export const CREATIVE_VIDEOS: CreativeVideo[] = [
  {
    id: 'vid-hero-1',
    slotKey: 'hero_01',
    number: '01',
    title: 'Clone sua imagem e sua voz',
    subtitle: 'Formatos UGC',
    tag: 'UGC PESSOAL',
    duration: '31s',
    image: INITIAL_IMAGE_SLOTS[0].url,
    aspectRatio: '9/16',
    description: 'Como clonar seu rosto e voz em alta resolução sem ligar a câmera todo dia.',
    script: {
      hook: 'Se você gasta mais de 3 horas por semana gravando e errando anúncio na frente da câmera, para agora.',
      body: 'Eu criei esse vídeo inteiro usando um clone do meu rosto e da minha voz real com IA. O resultado converte exatamente igual porque a iluminação e o ritmo parecem 100% orgânicos.',
      cta: 'Toque no link para ver o método passo a passo.'
    },
    promptUsed: 'Documentary close-up shot of a Brazilian woman, natural daylight from bedroom window, speaking candidly to smartphone camera, 8k, organic pores, natural micro-expressions.',
    estimatedCost: '$0,36'
  },
  {
    id: 'vid-hero-2',
    slotKey: 'hero_02',
    number: '02',
    title: 'Apresente o que você vende',
    subtitle: 'Demonstração',
    tag: 'DEMONSTRAÇÃO',
    duration: '16s',
    image: INITIAL_IMAGE_SLOTS[1].url,
    aspectRatio: '9/16',
    description: 'Demonstração dinâmica de produtos e serviços para negócios e marcas.',
    script: {
      hook: 'Quer mostrar seu produto em uso sem pagar R$ 5.000 para uma agência de vídeo?',
      body: 'Basta subir uma foto do produto em fundo branco e descrever o ator que você quer segurando a embalagem. Em 3 minutos a cena está renderizada.',
      cta: 'Veja o passo a passo completo no botão abaixo.'
    },
    promptUsed: 'Charismatic male presenter in casual office, holding a sleek minimalist product, explaining its benefits, sharp focus, natural hand gestures, cinematic softbox lighting.',
    estimatedCost: '$0,24'
  },
  {
    id: 'vid-hero-3',
    slotKey: 'hero_03',
    number: '03',
    title: 'Fale com outros países',
    subtitle: 'Multilíngue',
    tag: 'MULTILÍNGUE',
    duration: '32s',
    image: INITIAL_IMAGE_SLOTS[2].url,
    aspectRatio: '9/16',
    description: 'Anúncios traduzidos com sincronia labial e sotaques nativos da Europa e EUA.',
    script: {
      hook: 'Você já pensou em vender em dólar ou euro para clientes de fora do Brasil?',
      body: 'Nossos alunos pegam o mesmo roteiro que vendeu no Meta Brasil, traduzem com sotaque americano ou espanhol e publicam direto nos gerenciadores internacionais sem falar uma palavra.',
      cta: 'Acesse o treinamento com garantia total de 7 dias.'
    },
    promptUsed: 'European young entrepreneur in modern cafe, natural European Portuguese or Spanish lip sync, smiling, professional naturalistic footage, 1080x1920.',
    estimatedCost: '$0,42'
  }
];

export const FORMAT_ITEMS = [
  {
    id: 'fmt-1',
    slotKey: 'formato_ugc',
    number: '01',
    category: 'Formato Campeão',
    title: 'UGC realista',
    description: 'Personagens digitais em cenas rotineiras de uso do produto, com linguagem nativa do TikTok e Reels.',
    examplesCount: '5 exemplos',
    badge: 'Mais Vendido',
    duration: '24s',
    cost: '~$0,28'
  },
  {
    id: 'fmt-2',
    slotKey: 'formato_clone',
    number: '02',
    category: 'Marca Pessoal',
    title: 'Sua imagem e voz',
    description: 'Clone seu rosto em alta fidelidade e use sua própria voz sem regravar roteiro por roteiro.',
    examplesCount: '2 exemplos',
    badge: 'Sem Câmera',
    duration: '18s',
    cost: '~$0,32'
  },
  {
    id: 'fmt-3',
    slotKey: 'formato_voz_off',
    number: '03',
    category: 'E-commerce',
    title: 'Voz em off',
    description: 'Narração envolvente com cenas de B-roll geradas em IA que demonstram o uso e benefícios reais.',
    examplesCount: '2 exemplos',
    badge: 'Rápido de Produzir',
    duration: '15s',
    cost: '~$0,18'
  },
  {
    id: 'fmt-4',
    slotKey: 'formato_animados',
    number: '04',
    category: 'Criatividade Alta',
    title: 'Animados',
    description: 'Cenas no estilo 3D Pixar ou traço moderno para quebrar o padrão visual do feed e reter atenção.',
    examplesCount: '4 exemplos',
    badge: 'Alta Retenção',
    duration: '20s',
    cost: '~$0,30'
  },
  {
    id: 'fmt-5',
    slotKey: 'formato_podcast',
    number: '05',
    category: 'Autoridade',
    title: 'Podcast',
    description: 'Cortes simulando estúdios de gravação com microfones e tom de conversa reveladora.',
    examplesCount: '1 exemplo',
    badge: 'Gera Confiança',
    duration: '28s',
    cost: '~$0,34'
  },
  {
    id: 'fmt-6',
    slotKey: 'formato_dualcast',
    number: '06',
    category: 'Diálogo Dinâmico',
    title: 'DualCast',
    description: 'Dois personagens conversando na mesma cena com bate-bola de quebra de objeção instantânea.',
    examplesCount: '3 exemplos',
    badge: 'Quebra de Objeção',
    duration: '31s',
    cost: '~$0,48'
  },
  {
    id: 'fmt-7',
    slotKey: 'formato_trends',
    number: '07',
    category: 'Viralidade',
    title: 'Trends',
    description: 'Adapte tendências de áudio e transições rápidas aplicando a imagem do seu produto em segundos.',
    examplesCount: '2 exemplos',
    badge: 'Baixo CPM',
    duration: '12s',
    cost: '~$0,16'
  }
];

export const BRAND_CAROUSEL_ITEMS = [
  {
    id: 'brand-1',
    slotKey: 'carrossel_01',
    number: '01',
    title: 'Clone pessoal em cena casual',
    details: 'Duração: 19s · Gancho de curiosidade',
    cpm: 'R$ 8,40',
    ctr: '3,8%',
    costToMake: '$0,26'
  },
  {
    id: 'brand-2',
    slotKey: 'carrossel_02',
    number: '02',
    title: 'Apresentação de oferta e garantia',
    details: 'Duração: 22s · Conversão direta',
    cpm: 'R$ 11,20',
    ctr: '4,2%',
    costToMake: '$0,30'
  },
  {
    id: 'brand-3',
    slotKey: 'carrossel_03',
    number: '03',
    title: 'Explicando modelo sem mensalidade',
    details: 'Duração: 27s · Quebra de objeção',
    cpm: 'R$ 9,50',
    ctr: '3,1%',
    costToMake: '$0,38'
  },
  {
    id: 'brand-4',
    slotKey: 'carrossel_04',
    number: '04',
    title: 'Novas ferramentas adicionadas',
    details: 'Duração: 15s · Notícia/Novidade',
    cpm: 'R$ 7,90',
    ctr: '4,6%',
    costToMake: '$0,20'
  },
  {
    id: 'brand-5',
    slotKey: 'carrossel_05',
    number: '05',
    title: 'Como escalamos para 30 testes/semana',
    details: 'Duração: 34s · Estudo de caso',
    cpm: 'R$ 14,00',
    ctr: '3,4%',
    costToMake: '$0,44'
  },
  {
    id: 'brand-6',
    slotKey: 'carrossel_06',
    number: '06',
    title: 'Campanha internacional em espanhol',
    details: 'Duração: 21s · Mercado externo',
    cpm: '€ 4,10',
    ctr: '3,9%',
    costToMake: '$0,29'
  }
];

export const STRATEGIST_PRESETS: StrategistPreset[] = [
  {
    id: 'montessori',
    productName: 'Brinquedo Montessori de madeira para crianças +18 meses',
    targetMarket: 'Espanha / Europa',
    category: 'Infantil / E-commerce',
    latentPain: 'Mães exaustas buscando 20 minutos de paz sem apelar para telas hipnóticas de tablet.',
    objection: '"Meu filho se distrai em 2 minutos com brinquedos tradicionais e volta a chorar."',
    coreDesire: 'Estimulação cognitiva autônoma e um brinquedo seguro com madeira natural não-tóxica.',
    angles: [
      {
        title: 'Ângulo A (Selecionado)',
        description: '"O resgate do silêncio na sala de estar sem colocar desenho hipnótico."',
        isSelected: true
      },
      {
        title: 'Ângulo B',
        description: 'Comparação visual: Brinquedo de plástico barulhento vs. Madeira pedagógica durável.'
      },
      {
        title: 'Ângulo C',
        description: 'Presente perfeito para netos que os pais realmente aprovam e agradecem.'
      }
    ],
    script: {
      hook: '[GANCHO 0-3s]: "Se você também precisa de 15 minutos para tomar um café quente enquanto seu filho brinca sozinho e em silêncio..."',
      problem: '[PROBLEMA & PRODUTO]: "Brinquedos de plástico barulhentos sobrecarregam o cérebro da criança. Este painel Montessori ativa a concentração motora fina por horas."',
      cta: '[CTA FINAL]: "Toque em Saiba Mais para garantir frete grátis para toda a Espanha esta semana."'
    }
  },
  {
    id: 'colageno',
    productName: 'Colágeno Verisol Hidrolisado sabor Frutas Vermelhas',
    targetMarket: 'Brasil',
    category: 'Saúde & Beleza',
    latentPain: 'Mulheres com mais de 35 anos sentindo perda de elasticidade e cansaço de colágenos com gosto ruim.',
    objection: '"Já tomei outros colágenos e pareciam remédio amargo ou não fizeram efeito."',
    coreDesire: 'Pele firme e rotina agradável de autocuidado matinal.',
    angles: [
      {
        title: 'Ângulo A (Selecionado)',
        description: '"O colágeno que você toma pelo gosto bom antes mesmo do efeito na pele."',
        isSelected: true
      },
      {
        title: 'Ângulo B',
        description: 'Dermatologista em IA explicando por que pó solúvel absorve 4x mais que cápsulas.'
      },
      {
        title: 'Ângulo C',
        description: 'Rotina de 30 segundos no café da manhã que substitui 3 hidratantes caros.'
      }
    ],
    script: {
      hook: '[GANCHO 0-3s]: "Eu jurava que todo colágeno tinha gosto de remédio ruim... até experimentar esse."',
      problem: '[PROBLEMA & PRODUTO]: "Ele dissolve em 5 segundos, tem sabor de suco de frutas vermelhas e usa peptídeos Verisol alemães que comprovadamente agem nas linhas de expressão."',
      cta: '[CTA FINAL]: "Aproveite o combo de 3 potes com 30% de desconto hoje no site."'
    }
  },
  {
    id: 'servicos_trafego',
    productName: 'Serviço de Gestão de Tráfego Direto com Criativos em IA',
    targetMarket: 'Brasil / EUA',
    category: 'Prestação de Serviços B2B',
    latentPain: 'Empresários e infoprodutores cansados de pagar gestor que só roda criativo estático e reclama que o tráfego tá caro.',
    objection: '"Já contratei agência antes e só queimaram minha verba sem testar novos formatos."',
    coreDesire: 'Escalar vendas com 10 a 20 anúncios novos toda semana sem custo extra de filmagem.',
    angles: [
      {
        title: 'Ângulo A (Selecionado)',
        description: '"Por que meus clientes testam 15 novos anúncios toda semana gastando menos de R$ 50."',
        isSelected: true
      },
      {
        title: 'Ângulo B',
        description: 'Apresentação de estúdio virtual sem contratação de modelos.'
      },
      {
        title: 'Ângulo C',
        description: 'Comparativo de CAC: como criativos verticais em IA derrubaram o custo por lead pela metade.'
      }
    ],
    script: {
      hook: '[GANCHO 0-3s]: "Se o seu gestor de tráfego ainda te pede para gravar vídeo toda semana, você está pagando por um processo de 2021."',
      problem: '[PROBLEMA & PRODUTO]: "Na nossa assessoria nós criamos avatares, ganchos e variações de roteiro que rodam no Meta sem você precisar nem pegar o celular."',
      cta: '[CTA FINAL]: "Preencha o formulário para receber uma análise gratuita das suas campanhas atuais."'
    }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'bundle',
    name: 'PACOTE COMPLETO',
    badge: 'RECOMENDADO · MAIS ESCOLHIDO',
    subtitle: 'UGC REALISTA + ANIMADOS + DUALCAST',
    priceBRL: 247,
    priceUSD: 99,
    installmentsBRL: 'ou 12x de R$ 24,70',
    description: 'Aprenda o método integral e crie em cada um dos 7 formatos vencedores para seus anúncios.',
    features: [
      'Curso UGC Realista Completo: pessoas e produtos em alta fidelidade',
      'Curso Criativos Animados: estilo 3D de alta retenção no feed',
      'Curso DualCast: diálogos realistas entre 2 personagens na mesma cena',
      'Os 3 Agentes de IA: Estrategista, 6C Criativo e Arquiteto de Prompts',
      'Acervo de Produção: 86 prompts + 392 faixas e efeitos sonoros liberados',
      'Acesso vitalício: todas as atualizações futuras inclusas sem custo adicional'
    ]
  },
  {
    id: 'ugc',
    name: 'Só UGC Realista',
    subtitle: 'FORMAÇÃO ESPECÍFICA',
    priceBRL: 197,
    priceUSD: 79,
    installmentsBRL: 'ou 12x de R$ 19,70',
    description: 'Focado em pessoas e produtos realistas, sem os módulos de animação 3D e DualCast.',
    features: [
      'Todas as aulas de UGC com personagens e produtos',
      'Prompts específicos para humanos hiper-realistas',
      'Checklist de iluminação e consistência facial',
      'Acesso vitalício ao módulo UGC'
    ]
  },
  {
    id: 'animated',
    name: 'Só Animados',
    subtitle: 'ESTILO DIFERENCIADO',
    priceBRL: 147,
    priceUSD: 59,
    installmentsBRL: 'ou 12x de R$ 14,70',
    description: 'Focado em animações 3D de alta retenção e quebra de padrão visual no feed.',
    features: [
      'Aulas de criação de personagens em animação 3D',
      '8 prompts mestres para consistência visual',
      'Técnicas de cores e quebra de padrão no feed',
      'Atualizações do método animado inclusas'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: '1. Consigo fazer mesmo sem nenhuma experiência prévia em IA?',
    answer: 'Sim! O treinamento foi estruturado para quem está começando do absoluto zero. Você só precisa copiar os prompts prontos, colar na ferramenta e seguir as instruções visuais da tela. Em 40 minutos você já exporta seu primeiro anúncio completo.'
  },
  {
    question: '2. O método funciona para o meu tipo de produto ou serviço?',
    answer: 'Funciona para produtos físicos (e-commerce e dropshipping), infoprodutos, negócios locais, aplicativos e prestação de serviços. O Agente Estrategista adapta o roteiro e os personagens para qualquer nicho de mercado.'
  },
  {
    question: '3. Posso prestar serviços e vender os criativos para clientes?',
    answer: 'Com certeza. Você tem direitos comerciais totais sobre os vídeos que renderizar com o método para cobrar de marcas e lojistas da forma que preferir. Muitos alunos cobram de R$ 250 a R$ 600 por criativo finalizado.'
  },
  {
    question: '4. Preciso aparecer na câmera em algum momento?',
    answer: 'Não. A maior parte das aulas ensina a criar atores 100% virtuais que nunca existiram no mundo real. Se quiser clonar a si mesmo também ensinamos, mas é totalmente opcional.'
  },
  {
    question: '5. Posso fazer tudo pelo celular ou preciso de computador?',
    answer: 'As plataformas funcionam pelo navegador do celular, mas recomendamos fortemente um computador para organizar as pastas de arquivos e montar a edição com mais conforto e velocidade.'
  },
  {
    question: '6. Quantos vídeos posso produzir por mês?',
    answer: 'Não há limite no treinamento. Você produz quantos vídeos quiser de acordo com o saldo que colocar nas plataformas de geração recomendadas (média de $0,02 a $0,30 por vídeo curto).'
  },
  {
    question: '7. Como funciona a criação de anúncios em outros idiomas?',
    answer: 'Mostramos como traduzir os roteiros com sotaques nativos (Espanhol, Inglês, Francês, etc.) e manter a sincronia labial perfeita do personagem, permitindo vender na Europa e EUA sem falar o idioma.'
  },
  {
    question: '8. Como recebo o acesso após a compra?',
    answer: 'O acesso é liberado no mesmo segundo da aprovação do pagamento. Você receberá um e-mail com seu login individual e senha para acessar a área de membros.'
  },
  {
    question: '9. E se as ferramentas de IA mudarem com o tempo?',
    answer: 'Você tem acesso vitalício. Sempre que uma ferramenta atualiza ou uma alternativa melhor e mais barata surge no mercado, nós gravamos novas aulas e disponibilizamos para todos os alunos sem cobrança extra.'
  }
];

<template>
  <div class="page">
    <div class="page__contentainer">
      <div class="page__header">
        <h1>Управление рассылками</h1>
        <p>Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться. Но пожалуйста, исключите только те категории, которые действительно вас не интересуют. Мы обещаем слать только полезные письма где 😊</p>
      </div>
      <div class="page__content">
        <h3><b>Общие уведомления</b></h3>
        <div class="row">
          <div class="col-6">
              <p>Приветственная серия</p>
          </div>
          <div class="col-1 form-check form-switch">
            <input class="form-check-input" id="general-check-1" type="checkbox" checked>
          </div>
          <div class="col-3">
            <p class="article__subtext">4 полезных и емких письма в течение месяца</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
              <p>Образовательные вебинары</p>
          </div>
          <div class="col-1 form-check form-switch">
            <input class="form-check-input" id="general-check-2" type="checkbox">
          </div>
          <div class="col-3">
            <p class="article__subtext"> Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с напоминанием о предстоящем вебинаре</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="info-box">
              <p class="info-text">Личные сообщения</p>
            </div>
            
          </div>
          <div class="col-1 form-check form-switch">
            <input class="form-check-input" id="general-check-3" type="checkbox" checked>
          </div>
          <div class="col-3">
            dropdown
          </div>
        </div>
      </div>
      <div class="page__content">
        <h3><b>Уведомление по Сайтам</b></h3>
        <div class="row">
          <div class="col-6">
            <p>Новости</p>
          </div>
          <div class="col-1 form-check form-switch">
            <input class="form-check-input" type="checkbox" id="news-check" checked>
          </div>
        </div>
        <div>
          <h4>Поисковые агенты</h4>
          <div class="form-check form-switch">
            <p>Бизнес</p>
            <input placeholder="Seo">
            <input placeholder="Продвижение">
            <input pattern="Аналитика">
            <a href="">Детали</a>
            <div>
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            </div>
            <p>Поисковый агент присылает 1 письмо в неделю и только при условии, что найдены новые площадки</p>
          </div>
          <div class="form-check form-switch">
            <p>123</p>
            <input placeholder="Seo">
            <input placeholder="Продвижение">
            <input pattern="Аналитика">
            <a href="">Детали</a>
            <div>
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            </div>
          </div>
          <div class="form-check form-switch">
            <p>SEO</p>
            <input placeholder="Seo">
            <input placeholder="Продвижение">
            <input pattern="Аналитика">
            <a href="">Детали</a>
            <div>
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            </div>    
          </div>
          <div class="form-check form-switch">
            <p>Бурж ссылки</p>
            <input placeholder="Биржи ссылок: Не обнаружен">
            <a href="">Детали</a>
            <div>
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            </div>    
          </div>
        </div>
      </div>
      <div class="page__content">
        <h3>Рекламные компании</h3>

          <div class="row">
            <div class="col-6">
                <p> Строительство домов в Украине</p>
            </div>
            <div class="col-1 form-check form-switch">
              <input class="form-check-input" id="ad-check-1" type="checkbox" checked>
            </div>
            <div class="col-3">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Мгновенно
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Мгновенно</a></li>
                  <li><a class="dropdown-item" href="#">1 раз в день</a></li>
                  <li><a class="dropdown-item" href="#">Отключить</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
                <p> Строительство домов в Украине</p>
            </div>
            <div class="col-1 form-check form-switch">
              <input class="form-check-input" id="ad-check-1" type="checkbox">
            </div>
            <div class="col-3">
              
            </div>
          </div>
        </div>
      <div>
        <button class="btn btn-primary btn-default">По умолчанию</button>
        <button class="btn btn-primary btn-save">Сохранить изменения</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>



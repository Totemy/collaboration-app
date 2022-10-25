<template>
  <div class="container">
    <div>
      <h1>Управление рассылками</h1>
      <p>Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться. Но пожалуйста, исключите только те категории, которые действительно вас не интересуют. Мы обещаем слать только полезные письма где 😊</p>
    </div>
    <div class="row form-check form-switch">
      <h3><b>Общие уведомления</b></h3>
      
      <div>
       <p>Приветственная серия</p> <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked> <p>4 полезных и емких письма в течение месяца</p> 
      </div>
      <div >
       <p>Образовательные вебинары</p> <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>  Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с напоминанием о предстоящем вебинаре
      </div>
      <div>
        <p>Личные сообщения -i-</p> <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>  4 полезных и емких письма в течение месяца
      </div>

    </div>
    <div>
      <h3>Уведомление по Сайтам</h3>
      <div class="form-check form-switch">
        <p>Новости</p> <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
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
    <div>
      <h3>Рекламные компании</h3>
      <div>
        Строительство домов в Украине <br>
        Строительство домов в Украине
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
        </div>
        <div> <!-- dropdown-->
          
        </div>
      </div>
    </div>
    <div>
      <button>По умолчанию</button>
      <button>Сохранить изменения</button>
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



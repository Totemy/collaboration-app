<template>
  <div class="page">
    <div class="container page__container">
      <h1 class="page__title">
        Управление рассылками
      </h1>
      <p class="page__description">
        Здравствуйте, Андрей. Выберите, категории писем, от которых хотите
        отписаться. <br />
        Но пожалуйста, исключите только те категории, которые действительно вас
        не интересуют. <br />
        Мы обещаем слать только полезные письма где 😊
      </p>

      <div>
        <div class="settings__container">
          <h3 class="settings__title">
            Общие уведомления
          </h3>
          <div class="settings__item">
            <div class="row">
              <div class="col-10 col-lg ">
                <p>Приветственная серия</p>
              </div>
              <div class="col-2 col-lg-auto ">
                <div class="form-check form-switch">
                  <input
                    id="general-check-1"
                    class="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    checked
                  />
                </div>
              </div>
              <div class="col-12 col-lg-auto">
                <p class="settings__details">
                  4 полезных и емких письма в течение месяца
                </p>
              </div>
            </div>
          </div>
          <div class="settings__item">
            <div class="row">
              <div class="col-10 col-lg">
                <p>Образовательные вебинары</p>
              </div>
              <div class="col-2 col-lg-auto">
                <div class=" form-check form-switch">
                  <input
                    id="general-check-2"
                    class="form-check-input"
                    type="checkbox"
                    name="checkbox"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-auto">
                <p class="settings__details">
                  Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете
                  получать 2 письма с напоминанием о предстоящем вебинаре
                </p>
              </div>
            </div>
          </div>
          <div class="settings__item">
            <div class="row">
              <div class="col-10 col-lg">
                <p>
                  Личные сообщения
                  <TooltipItem
                    position="right"
                    :tooltip-text="
                      'Письма об обновлениях и улучшениях платформы'
                    "
                  >
                    <img src="images/icons/info.svg" />
                  </TooltipItem>
                </p>
              </div>
              <div class="col-2 col-lg-auto">
                <div class="form-check form-switch">
                  <input
                    id="general-check-3"
                    class="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    checked
                  />
                </div>
              </div>

              <div class="col-12 col-lg-auto">
                <div class="settings__details">
                  <select id="selector" class="content__dropdown">
                    <option>
                      Мгновенно
                    </option>
                    <option>1 раз в день</option>
                    <option>Отключить</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="settings__container">
          <div class="settings__item">
            <h3 class="settings__title">
              Уведомление по Сайтам
            </h3>
            <div class="row">
              <div class="col-10 col-lg">
                <p>Новости</p>
              </div>
              <div class="col-2 col-lg-auto ">
                <div class="form-check form-switch">
                  <input
                    id="news-check"
                    class="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    checked
                  />
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="settings__details" />
              </div>
            </div>
          </div>
        </div>

        <div class="settings__container">
          <h4>Поисковые агенты</h4>
          <div>
            <div class="row">
              <p>Бизнес</p>
              <div class="col-6 col-lg">
                <div class="tags__box">
                  <TagList
                    class="tags__container"
                    :list="list1"
                    @removeItem="removeListItem"
                  />
                  <DetailsSection>
                    Повседневная практика показывает, что новая модель
                    организационной деятельности влечет за собой процесс
                    внедрения и модернизации существенных финансовых и
                    административных условий
                  </DetailsSection>
                </div>
              </div>
              <div class="col-1 col-lg-auto ">
                <div class="form-check form-switch">
                  <input
                    id="flexSwitchCheckChecked"
                    class="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    checked
                  />
                </div>
              </div>
              <div class="col-10 col-lg-auto">
                <p class="settings__details">
                  Поисковый агент присылает 1 письмо в неделю и только при
                  условии, что найдены новые площадки
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <p>123</p>
              <div class="col-6 col-lg">
                <div class="tags__box">
                  <TagList
                    class="tags__container"
                    :list="list2"
                    @removeItem="removeListItem"
                  />
                  <DetailsSection>
                    Равным образом постоянное информационно-пропагандистское
                    обеспечение нашей деятельности влечет за собой процесс
                    внедрения и модернизации модели развития.
                  </DetailsSection>
                </div>
              </div>

              <div class="col-1 col-lg-auto  ">
                <div class="form-check form-switch">
                  <input
                    id="flexSwitchCheckChecked"
                    class="form-check-input"
                    name="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="settings__details" />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <p>SEO</p>
              <div class="col-6 col-lg">
                <div class="tags__box">
                  <TagList
                    class="tags__container"
                    :list="list3"
                    @removeItem="removeListItem"
                  />
                  <DetailsSection>
                    Разнообразный и богатый опыт новая модель организационной
                    деятельности позволяет выполнять важные задания по
                    разработке систем массового участия.
                  </DetailsSection>
                </div>
              </div>
              <div class="col-1 col-lg-auto  ">
                <div class="form-check form-switch">
                  <input
                    id="flexSwitchCheckChecked"
                    class="form-check-input"
                    name="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="settings__details" />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <p>Бурж ссылки</p>
              <div class="col-6 col-lg">
                <div class="tags__box">
                  <TagList
                    class="tags__container"
                    :list="list4"
                    @removeItem="removeListItem"
                  />
                  <DetailsSection>
                    Задача организации, в особенности же дальнейшее развитие
                    различных форм деятельности влечет за собой процесс
                    внедрения и модернизации форм развития.
                  </DetailsSection>
                </div>
              </div>

              <div class="col-1 col-lg-auto">
                <div class=" form-check form-switch">
                  <input
                    id="flexSwitchCheckChecked"
                    class="form-check-input"
                    name="checkbox"
                    type="checkbox"
                    checked
                  />
                </div>
              </div>
              <div class="col-lg-auto">
                <div class="settings__details" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="settings__container settings__ad">
            <h3>Рекламные компании</h3>

            <div class="row">
              <div class="col-10 col-lg">
                <p>Строительство домов в Украине</p>
              </div>
              <div class="col-2 col-lg-auto ">
                <div class="form-check form-switch">
                  <input
                    id="ad-check-1"
                    class="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    checked
                  />
                </div>
              </div>
              <div class="col-12 col-lg-auto">
                <div class="settings__details">
                  <select id="selector" class="content__dropdown">
                    <option>
                      Мгновенно
                    </option>
                    <option>1 раз в день</option>
                    <option>Отключить</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-10 col-lg">
                <p>Строительство домов в Украине</p>
              </div>
              <div class="col-2 col-lg-auto">
                <div class="form-check form-switch">
                  <input
                    id="ad-check-1"
                    class="form-check-input"
                    name="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-auto">
                <div class="settings__details">
                  <select id="selector" class="content__dropdown">
                    <option>
                      Мгновенно
                    </option>
                    <option>1 раз в день</option>
                    <option>Отключить</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="page__telegram">
          <h3>Уведомление по Телеграму</h3>
          <div class="row">
            <div class="col-10 col-lg">
              <p>Новости</p>
            </div>
            <div class="col-2 col-lg-auto ">
              <div class="form-check form-switch">
                <input
                  id="news-check"
                  class="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  checked
                />
              </div>
            </div>
            <div class="col-lg-auto">
              <div class="settings__details" />
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-primary btn-default" @click="selects()">
            По умолчанию
          </button>
          <button
            id="show-modal"
            class="btn btn-primary btn-save"
            @click="showSaveModal = true"
          >
            Сохранить изменения
          </button>
          <Teleport to="body">
            <save-modal
              :show="showSaveModal"
              @save="saveAction()"
              @close="showSaveModal = false"
            >
              <template #header>
                <h3>Вы уверены?</h3>
              </template>
            </save-modal>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TooltipItem from "./TooltipItem.vue";
import TagList from "./TagList.vue";
import SaveModal from "./SaveModal.vue";
import DetailsSection from "./DetailsSection";
export default {
  name: "HelloWorld",
  components: {
    SaveModal,
    DetailsSection,
    TooltipItem,
    TagList,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      showSaveModal: false,
      list1: ["Seo", "Продвижение", "Аналитика"],
      list2: ["Seo", "Продвижение"],
      list3: ["Seo", "Продвижение", "Аналитика"],
      list4: ["Биржи ссылок: Не обнаружен"],
    };
  },
  methods: {
    saveAction() {
      alert("Сохранено");
      this.showSaveModal = false;
    },
    removeListItem(list, index) {
      list.splice(index, 1);
    },
    toggle(source) {
      var checkboxes = document.getElementsByName("checkbox");
      for (var checkbox in checkboxes) checkbox.checked = source.checked;
    },
    selects() {
      var ele = document.getElementsByName("checkbox");
      for (var i = 0; i < ele.length; i++) {
        if (ele[i].type == "checkbox") ele[i].checked = true;
      }
    },
  },
};
</script>

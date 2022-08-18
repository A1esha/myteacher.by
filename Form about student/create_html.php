
<?php
   
    
    $profession = $_POST['profession'];
    $education = $_POST['education'];
    $name = $_POST['name'];
    $experience = $_POST['experience'];
    $information = $_POST['information'];
    $cost = $_POST['cost'];
    $rating = $_POST['rating'];
    $index = $_POST['index'];


    $TagCode = '
    <div class="form">
            <h1 class="info__nickname">
                '.$name.'
            </h1>
            <p class="info__profession">
                '.$profession.'
            </p>
            <div class="info__merged_statistics">
                <div class="info__photo">
                    <a class="info__photo-link">
                        <img src="./img/jpg/photo__student'.$index.'.jpg" class="info__photo-pic"></img>
                    </a>
                </div>
                <ul class="info__rating">
                    <li class="form__statistic-li">
                        <div class="form__statistic">
                            <div class="form__name_value">  
                                <div class="form__name">
                                    <p class="statistic__name">
                                        Стоимость - 
                                    </p>
                                </div>
                                <div class="form__value">
                                    <p class="statistic__value">
                                        '.$cost.' рублей
                                    </p>
                                </div>
                            </div>
                            <div class="info__progress-bar">
                                <div id="info__progress-1" class="info__progress-value">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="form__statistic-li">
                        <div class="form__statistic">
                            <div class="form__name_value">
                                <div class="form__name">
                                    <p class="statistic__name">
                                        Рейтинг -  
                                    </p>
                                </div>
                                <div class="form__value">
                                    <p class="statistic__value">
                                        '.$rating.'
                                    </p>
                                </div>
                            </div>
                            <div class="info__progress-bar">
                                <div id="info__progress-2"
                                class="info__progress-value">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="form__statistic-li">
                        <div class="form__statistic">
                            <div class="form__name_value">
                            
                                <div class="form__name">
                                    <p class="statistic__name">
                                        Опыт - 
                                    </p>
                                </div>
                                <div class="form__value">
                                    <p class="statistic__value">
                                        '.$experience.' лет
                                    </p>
                                </div>

                            </div>
                            <div class="info__progress-bar">
                                <div id="info__progress-3"class="info__progress-value">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="info__table">
                <ul class="info__table_form">
                    <li class="info__item">
                        <div class="info__item-name">
                            Обо мне
                        </div>
                        <div class="info__item-value">
                            '.$information.'
                        </div>
                    </li>
                    <li class="info__item">
                        <div class="info__item-name">
                            Стаж и образование
                        </div>
                        <div class="info__item-value">
                            '.$education.'
                        </div>
                    </li>
                    <li class="info__item">
                        <div class="info__item-name">
                            Прайс-лист
                        </div>
                        <ul class="info__price_list">
                            <li class="info__price_item-li">
                                <div class="info__price_item">
                                    <div class="info__price_item-name">
                                        Единая цена -
                                    </div>
                                    <div class="info__price_item-value"> 
                                        '.$cost.' рублей урок.
                                    </div>
                                </div>
                            </li>
                            <li class="info__price_item-li">
                                <div class="info__price_item">
                                    <div class="info__price_item-name">
                                        Продолжительность урока -
                                    </div>
                                    <div class="info__price_item-value">
                                        1 академический час (45 минут).
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div> ,'
    .$cost.', '.$rating.', '.$experience;

    $Filename = $index.'.html';
    $Mode = 'w+';
    $File = fopen($Filename, $Mode);
    $Status = fwrite($File, $TagCode);
    fclose($File);
    
    echo 'pussy';
?>

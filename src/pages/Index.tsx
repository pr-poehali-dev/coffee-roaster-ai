import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold text-primary">
            AI Roaster
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-sm font-medium hover:text-accent transition-colors">
              Главная
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-accent transition-colors">
              Преимущества
            </a>
            <a href="#specs" className="text-sm font-medium hover:text-accent transition-colors">
              Характеристики
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">
              Отзывы
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Заказать демонстрацию
          </Button>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-primary">
                Идеальный кофе стал просто.<br />
                <span className="text-accent">Для любого сотрудника.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Высоко интеллектуальный кофейный ростер российского производства: стабильный результат даже без опыта. Для тех, кто ценит вкус и репутацию.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
                  Заказать демонстрацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Узнать подробности
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/40a18f2b-af27-43d5-9169-dc724b5d5cef/files/9fefb675-9815-4cf0-a20e-039440bd4bcc.jpg"
                alt="AI Coffee Roaster"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Знакомо ли вам?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 space-y-4">
                <Icon name="AlertCircle" size={40} className="text-accent" />
                <p className="text-lg">
                  Ваш кофе отличается от партии к партии — сложно удерживать высокий стандарт свежести и вкуса.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 space-y-4">
                <Icon name="Users" size={40} className="text-accent" />
                <p className="text-lg">
                  Весь процесс держится на одном-двух опытных людях. Стоит уехать/заболеть – и качество падает.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 space-y-4">
                <Icon name="TrendingDown" size={40} className="text-accent" />
                <p className="text-lg">
                  Прекрасное сырьё теряет потенциал из-за случайных ошибок или неправильно выставленных настроек.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
            Здесь всё меняется
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Вам больше не нужно гадать, получится ли партия хорошей — любой сотрудник сможет обжаривать кофе спешалти на уровне чемпиона.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Cpu" size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Интеллектуальная система</h3>
                <p className="text-muted-foreground">
                  Сама выставляет параметры обжарки под выбранный профиль.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Settings" size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Мастер-профили</h3>
                <p className="text-muted-foreground">
                  Настраиваются один раз; дальше всё происходит по кнопке.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg">Контроль качества</h3>
                <p className="text-muted-foreground">
                  Даже новичок не допустит ошибок, процесс прозрачен и контролируем.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-primary">
            Преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Стабильность вкуса</h3>
                <p className="text-muted-foreground">
                  Ваш бренд всегда ассоциируется с идеальным качеством в каждой партии.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Время — на главном</h3>
                <p className="text-muted-foreground">
                  Освобождаете технолога от рутины. Оборудование контролирует всё само.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Lightbulb" size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Обучение — за 30 минут</h3>
                <p className="text-muted-foreground">
                  Запустить обжарку и не ошибиться сможет даже новичок.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Handshake" size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Персональный сервис</h3>
                <p className="text-muted-foreground">
                  Помощь, запчасти, обновления, быстрый ответ — всегда в доступе.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="TrendingUp" size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Выше прибыль</h3>
                <p className="text-muted-foreground">
                  Каждая партия отвечает стандарту, брак сведён к нулю.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Flag" size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl">Российское производство</h3>
                <p className="text-muted-foreground">
                  Быстрая поддержка и доставка запчастей по всей России.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-primary">
            Технические характеристики
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-6">Производительность</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Объём загрузки</span>
                    <span className="font-semibold">3-12 кг</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Время обжарки</span>
                    <span className="font-semibold">10-20 мин</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Производительность</span>
                    <span className="font-semibold">До 60 кг/час</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-6">Система управления</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Тип управления</span>
                    <span className="font-semibold">AI-автоматика</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Интерфейс</span>
                    <span className="font-semibold">Сенсорный 10"</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Профили</span>
                    <span className="font-semibold">Неограниченно</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-6">Конструкция</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Материал барабана</span>
                    <span className="font-semibold">Нержавеющая сталь</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Габариты</span>
                    <span className="font-semibold">120×80×150 см</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-semibold">280 кг</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-6">Энергопотребление</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Мощность</span>
                    <span className="font-semibold">15 кВт</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Напряжение</span>
                    <span className="font-semibold">380В, 3 фазы</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground">Охлаждение</span>
                    <span className="font-semibold">Воздушное</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-secondary/50 to-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <Icon name="Award" size={48} className="text-accent mx-auto" />
          <h2 className="text-3xl font-heading font-bold text-primary">
            Доказательства качества
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">обжарочных производств по всей России</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-2">99.5%</div>
                <p className="text-muted-foreground">стабильность качества партий</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">техническая поддержка клиентов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-primary">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Взяли ростер на замену старой итальянской машине. Первое, что поразило — больше не нужно следить за каждым градусом. Даже новый помощник смог обжарить партию как по учебнику."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-heading font-semibold">Илья М.</p>
                  <p className="text-sm text-muted-foreground">CoffeeWay Bar</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Качество выросло, а списания ушли в прошлое. Окупился за полгода благодаря снижению брака и увеличению производительности. Рекомендую!"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-heading font-semibold">Анна С.</p>
                  <p className="text-sm text-muted-foreground">Roast Masters</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Поддержка на высшем уровне. Любой вопрос решается за 15 минут, запчасти приходят быстро. Это именно то, что нужно для бизнеса."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-heading font-semibold">Дмитрий К.</p>
                  <p className="text-sm text-muted-foreground">Coffee Lab</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-primary">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading font-semibold">
                Это точно надёжно? А если что-то сломается?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Каждый ростер проходит тройную проверку перед отгрузкой. Поддержка и запчасти в России — не ждёте месяцами, ваш бизнес под защитой. Гарантия 2 года на все узлы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading font-semibold">
                У нас мало опыта — вдруг сотрудники не разберутся?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Система настолько интуитивна, что понадобятся только базовые знания кофе. В комплекте — видеоинструкции и онлайн-обучение. Средний срок обучения нового оператора — 30 минут.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading font-semibold">
                А если у нас свои профили обжарки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Легко добавляйте свои уникальные рецепты — ростер их запомнит. Можно работать по своей методике с полным контролем всех параметров.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading font-semibold">
                Какой срок окупаемости оборудования?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В среднем 6-9 месяцев при активном использовании. Экономия достигается за счёт снижения брака, увеличения производительности и сокращения затрат на обучение персонала.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading font-semibold">
                Можно ли посмотреть ростер в работе перед покупкой?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Конечно! Мы организуем бесплатную демонстрацию в нашем демо-зале или у действующих клиентов. Вы сможете сами обжарить партию и оценить качество.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
              Высокое качество кофе каждый день — теперь это ваша реальность
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму и получите бесплатную консультацию с подбором решения для вашего цеха.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <Textarea
                    placeholder="Расскажите о вашем бизнесе и задачах"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Получить консультацию
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Перезвоним в течение 15 минут. Без спама и навязываний.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">AI Roaster</h3>
              <p className="text-white/80">
                Высоко интеллектуальный кофейный ростер российского производства
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@airoaster.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-white/80">
                <a href="#benefits" className="block hover:text-accent transition-colors">
                  Преимущества
                </a>
                <a href="#specs" className="block hover:text-accent transition-colors">
                  Характеристики
                </a>
                <a href="#testimonials" className="block hover:text-accent transition-colors">
                  Отзывы
                </a>
                <a href="#faq" className="block hover:text-accent transition-colors">
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 AI Roaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
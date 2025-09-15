import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const services = [
    {
      title: "Индивидуальные тренировки",
      description: "Персональный подход к каждому ученику",
      price: "от 2500₽",
      duration: "60 мин",
      features: ["Техника ударов", "Самооборона", "Физическая подготовка"]
    },
    {
      title: "Групповые занятия",
      description: "Тренировки в группе до 8 человек",
      price: "от 1200₽",
      duration: "90 мин",
      features: ["Спарринги", "Формы (пхумсе)", "Растяжка"]
    },
    {
      title: "Детские группы",
      description: "Обучение детей от 5 до 16 лет",
      price: "от 1000₽",
      duration: "60 мин",
      features: ["Дисциплина", "Координация", "Самоконтроль"]
    }
  ];

  const achievements = [
    "Мастер спорта по тхэквондо",
    "Чемпион России 2018-2020",
    "Тренерский стаж 12 лет",
    "Подготовил 25+ кандидатов в мастера спорта"
  ];

  const timeSlots = ["09:00", "11:00", "14:00", "16:00", "18:00", "20:00"];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.phone) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }
    alert(`Заявка отправлена! Мы свяжемся с вами для подтверждения записи на ${format(selectedDate, "d MMMM", { locale: ru })} в ${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-bold text-black">TAEKWONDO TRAINER</h1>
            <div className="hidden md:flex space-x-6">
              {["Главная", "Обо мне", "Услуги", "Достижения", "Расписание", "Галерея", "Отзывы", "Контакты"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-heading font-bold text-black mb-6">
                Достигни совершенства в <span className="text-primary">тхэквондо</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные тренировки от мастера спорта. Изучай боевое искусство, развивай дисциплину и достигай новых высот в своем развитии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Записаться на тренировку
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/8c450b36-1d16-49c8-9d6c-b56d2b436f0d.jpg" 
                alt="Тренер тхэквондо" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">Услуги и тренировки</h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат обучения</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <CardTitle className="font-heading text-black">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="outline" className="border-primary text-primary">{service.duration}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Icon name="Check" className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-black mb-4">Онлайн запись</h2>
              <p className="text-xl text-gray-600">Забронируйте удобное время для тренировки</p>
            </div>
            
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-base font-medium text-black mb-4 block">Выберите дату</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left border-gray-300">
                          <Icon name="Calendar" className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "d MMMM yyyy", { locale: ru }) : "Выберите дату"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    
                    <Label className="text-base font-medium text-black mb-4 mt-6 block">Выберите время</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className={selectedTime === time ? "bg-primary hover:bg-primary/90" : "border-gray-300"}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium text-black">Имя *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium text-black">Телефон *</Label>
                      <Input 
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium text-black">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base font-medium text-black">Комментарий</Label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="border-gray-300"
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleBooking} className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Calendar" className="mr-2 h-4 w-4" />
                      Записаться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="достижения" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">Достижения</h2>
            <p className="text-xl text-gray-600">Результаты многолетней работы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Trophy" className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-medium text-black">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Icon name="Users" className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Учеников</div>
            </div>
            <div>
              <Icon name="Trophy" className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Чемпионов</div>
            </div>
            <div>
              <Icon name="Clock" className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-lg">Лет опыта</div>
            </div>
            <div>
              <Icon name="Star" className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Качество</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="галерея" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-black mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Моменты тренировок и соревнований</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="/img/500112f8-2a3b-400c-bc00-f87e5652b6d1.jpg" 
              alt="Тренировочное оборудование" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="/img/8c450b36-1d16-49c8-9d6c-b56d2b436f0d.jpg" 
              alt="Тренировка" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="bg-gray-100 rounded-lg shadow-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Больше фото скоро</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">Свяжитесь со мной любым удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">trainer@taekwondo.ru</p>
            </div>
            <div>
              <Icon name="MapPin" className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">Спортивный зал "Олимп"<br/>ул. Спортивная, 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Taekwondo Trainer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
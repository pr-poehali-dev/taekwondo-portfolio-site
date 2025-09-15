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
      title: "ИНДИВИДУАЛЬНЫЕ ТРЕНИРОВКИ",
      description: "Персональный подход, максимальный результат",
      price: "от 2500₽",
      duration: "60 мин",
      features: ["Техника ударов", "Самооборона", "Физическая подготовка"]
    },
    {
      title: "ГРУППОВЫЕ ЗАНЯТИЯ",
      description: "Командный дух и здоровая конкуренция",
      price: "от 1200₽",
      duration: "90 мин",
      features: ["Спарринги", "Формы (пхумсе)", "Растяжка"]
    },
    {
      title: "ДЕТСКИЕ ГРУППЫ",
      description: "Воспитываем чемпионов с детства",
      price: "от 1000₽",
      duration: "60 мин",
      features: ["Дисциплина", "Координация", "Самоконтроль"]
    }
  ];

  const achievements = [
    "МАСТЕР СПОРТА ПО ТХЭКВОНДО",
    "ЧЕМПИОН РОССИИ 2018-2020",
    "12 ЛЕТ ТРЕНЕРСКОГО СТАЖА",
    "25+ КАНДИДАТОВ В МАСТЕРА СПОРТА"
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
      <nav className="bg-black border-b-4 border-primary sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-heading font-bold text-white">
              <span className="text-primary text-4xl">FIRE</span>KICK
            </h1>
            <div className="hidden md:flex space-x-8">
              {["Главная", "Обо мне", "Услуги", "Достижения", "Расписание", "Галерея", "Отзывы", "Контакты"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-primary transition-colors font-bold uppercase tracking-wide">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Большие красные геометрические элементы */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full opacity-20 transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary opacity-30 transform -translate-x-36 translate-y-36 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-32 bg-primary transform -rotate-12"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-24 bg-primary transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary text-white px-6 py-2 text-sm font-bold tracking-wider uppercase mb-4">МАСТЕР ТХЭКВОНДО</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                СИЛА.
                <br />
                <span className="text-primary text-7xl lg:text-8xl">ДИСЦИПЛИНА.</span>
                <br />
                ПОБЕДА.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Тренировки, которые изменят твою жизнь. Без компромиссов. Без оправданий. Только результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all shadow-2xl">
                  НАЧАТЬ СЕЙЧАС
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 text-lg">
                  СМОТРЕТЬ ВИДЕО
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-20 rounded-lg transform rotate-3"></div>
              <img 
                src="/img/8c450b36-1d16-49c8-9d6c-b56d2b436f0d.jpg" 
                alt="Тренер тхэквондо" 
                className="relative z-10 rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform"
              />
              {/* Крупный красный акцент */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary rounded-full flex items-center justify-center z-20">
                <Icon name="Zap" className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-32 bg-black relative">
        {/* Большие красные элементы */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 transform translate-x-40 -translate-y-40 rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-96 h-2 bg-gradient-to-r from-primary to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold tracking-wider uppercase mb-6">ВЫБЕРИ СВОЙ ПУТЬ</span>
            <h2 className="text-6xl font-heading font-bold text-white mb-6">ТРЕНИРОВКИ БЕЗ
            <br /><span className="text-primary">КОМПРОМИССОВ</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-2 border-gray-800 hover:border-primary transition-all transform hover:scale-105 group relative overflow-hidden">
                {/* Красный акцент */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-red-600"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="w-6 h-6 text-primary" />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-white text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-bold text-primary">{service.price}</span>
                    <Badge className="bg-primary/20 text-primary border-primary font-bold text-lg px-4 py-2">{service.duration}</Badge>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                          <Icon name="Check" className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 text-lg transform hover:scale-105 transition-all shadow-lg">
                    ВЫБРАТЬ СИЛУ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full transform -translate-x-32 -translate-y-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold tracking-wider uppercase mb-6">ДЕЙСТВУЙ</span>
              <h2 className="text-6xl font-heading font-bold text-white mb-4">ЗАПИСЬ НА
              <br /><span className="text-primary">ТРАНСФОРМАЦИЮ</span></h2>
              <div className="w-32 h-2 bg-primary mx-auto"></div>
            </div>
            
            <Card className="bg-gray-900 border-2 border-primary">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <Label className="text-xl font-bold text-white mb-6 block uppercase tracking-wide">Выберите дату</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left border-2 border-primary text-white bg-transparent hover:bg-primary hover:text-white py-4 text-lg">
                          <Icon name="Calendar" className="mr-3 h-6 w-6" />
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
                    
                    <Label className="text-xl font-bold text-white mb-6 mt-8 block uppercase tracking-wide">Выберите время</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="lg"
                          onClick={() => setSelectedTime(time)}
                          className={selectedTime === time 
                            ? "bg-primary hover:bg-red-700 text-white font-bold" 
                            : "border-2 border-gray-600 text-gray-300 hover:border-primary hover:text-primary font-bold"}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-xl font-bold text-white uppercase tracking-wide">Имя *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-2 border-gray-600 bg-transparent text-white py-4 text-lg focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xl font-bold text-white uppercase tracking-wide">Телефон *</Label>
                      <Input 
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-2 border-gray-600 bg-transparent text-white py-4 text-lg focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xl font-bold text-white uppercase tracking-wide">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-2 border-gray-600 bg-transparent text-white py-4 text-lg focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-xl font-bold text-white uppercase tracking-wide">Комментарий</Label>
                      <Textarea 
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="border-2 border-gray-600 bg-transparent text-white text-lg focus:border-primary"
                        rows={4}
                      />
                    </div>
                    <Button onClick={handleBooking} className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 text-xl transform hover:scale-105 transition-all shadow-2xl">
                      <Icon name="Calendar" className="mr-3 h-6 w-6" />
                      ЗАПИСАТЬСЯ НА БОЙ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="достижения" className="py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full transform translate-x-48 -translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold tracking-wider uppercase mb-6">РЕЗУЛЬТАТЫ</span>
            <h2 className="text-6xl font-heading font-bold text-black mb-6">ФАКТЫ О
            <br /><span className="text-primary">ПОБЕДАХ</span></h2>
            <div className="w-32 h-2 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-4 border-gray-200 hover:border-primary transition-all transform hover:scale-105 group bg-white">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Icon name="Trophy" className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-black group-hover:text-primary transition-colors">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-gradient-to-r from-primary via-red-600 to-primary relative overflow-hidden">
        {/* Большие декоративные элементы */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white/20 rounded-full transform -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white/10 transform translate-x-48 translate-y-48 rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-white mb-4">РЕЗУЛЬТАТЫ ГОВОРЯТ</h2>
            <div className="w-32 h-2 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="transform hover:scale-110 transition-transform">
              <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold mb-2 text-white">200+</div>
              <div className="text-xl font-bold text-white/90 uppercase tracking-wider">УЧЕНИКОВ</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Trophy" className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold mb-2 text-white">25+</div>
              <div className="text-xl font-bold text-white/90 uppercase tracking-wider">ЧЕМПИОНОВ</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold mb-2 text-white">12</div>
              <div className="text-xl font-bold text-white/90 uppercase tracking-wider">ЛЕТ ОПЫТА</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Flame" className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold mb-2 text-white">100%</div>
              <div className="text-xl font-bold text-white/90 uppercase tracking-wider">ОГОНЬ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="галерея" className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold tracking-wider uppercase mb-6">ГАЛЕРЕЯ</span>
            <h2 className="text-6xl font-heading font-bold text-white mb-6">МОМЕНТЫ
            <br /><span className="text-primary">СИЛЫ</span></h2>
            <div className="w-32 h-2 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/img/500112f8-2a3b-400c-bc00-f87e5652b6d1.jpg" 
                alt="Тренировочное оборудование" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/img/8c450b36-1d16-49c8-9d6c-b56d2b436f0d.jpg" 
                alt="Тренировка" 
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="bg-gray-900 border-4 border-primary rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Plus" className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-white font-bold text-xl">БОЛЬШЕ ФОТО<br />СКОРО</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-32 bg-gray-900 text-white relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-5 transform -translate-x-48 -translate-y-48 rotate-45"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold tracking-wider uppercase mb-6">КОНТАКТЫ</span>
            <h2 className="text-6xl font-heading font-bold mb-6">СВЯЗАТЬСЯ
            <br /><span className="text-primary">СЕЙЧАС</span></h2>
            <div className="w-32 h-2 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Phone" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Телефон</h3>
              <p className="text-xl text-gray-300 font-bold">+7 (999) 123-45-67</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Mail" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Email</h3>
              <p className="text-xl text-gray-300 font-bold">firekick@fighter.ru</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="MapPin" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Адрес</h3>
              <p className="text-xl text-gray-300 font-bold">Боевой зал "СИЛА"<br/>ул. Победы, 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            <span className="text-primary text-4xl">FIRE</span>KICK
          </h3>
          <p className="text-gray-400 text-lg">© 2024 FireKick Training. Все права защищены. Создано для побед.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
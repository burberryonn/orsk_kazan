import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Send,
  Car,
  Clock,
  Shield,
  BadgeCheck,
  CheckCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    route: "",
    date: "",
  });

  const routes = [
    {
      from: "Орск",
      to: "Казань",
      time: "22:00",
      duration: "12 часов",
      price: "3500",
      priceOld: "4000",
    },
    {
      from: "Казань",
      to: "Орск",
      time: "22:00",
      duration: "12 часов",
      price: "3500",
      priceOld: "4000",
    },
    {
      from: "Оренбург",
      to: "Казань",
      time: "21:00",
      duration: "14 часов",
      price: "3800",
      priceOld: "4200",
    },
    {
      from: "Казань",
      to: "Оренбург",
      time: "21:00",
      duration: "14 часов",
      price: "3800",
      priceOld: "4200",
    },
    {
      from: "Орск",
      to: "Набережные Челны",
      time: "23:00",
      duration: "10 часов",
      price: "3200",
      priceOld: "3600",
    },
    {
      from: "Набережные Челны",
      to: "Орск",
      time: "23:00",
      duration: "10 часов",
      price: "3200",
      priceOld: "3600",
    },
    {
      from: "Оренбург",
      to: "Набережные Челны",
      time: "22:30",
      duration: "12 часов",
      price: "3400",
      priceOld: "3800",
    },
    {
      from: "Набережные Челны",
      to: "Оренбург",
      time: "22:30",
      duration: "12 часов",
      price: "3400",
      priceOld: "3800",
    },
  ];

  const fleet = [
    {
      name: "Mercedes-Benz Sprinter",
      type: "Микроавтобус",
      seats: "18-20 мест",
      comfort: "Премиум",
      features: [
        "Кондиционер",
        "Мягкие сиденья",
        "Багажный отсек",
        "USB-зарядка",
      ],
    },
    {
      name: "Ford Transit",
      type: "Микроавтобус",
      seats: "16-18 мест",
      comfort: "Комфорт",
      features: [
        "Климат-контроль",
        "Откидные сиденья",
        "Вместительный багажник",
        "Аудиосистема",
      ],
    },
    {
      name: "Toyota Hiace",
      type: "Минивэн",
      seats: "10-12 мест",
      comfort: "Бизнес",
      features: [
        "Кожаные сиденья",
        "Кондиционер",
        "Просторный салон",
        "Зарядные устройства",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      city: "Казань",
      rating: 5,
      text: "Пользуюсь услугами уже 3 года. Всегда вовремя, чистые машины, вежливые водители. Рекомендую!",
    },
    {
      name: "Михаил Сергеев",
      city: "Орск",
      rating: 5,
      text: "Отличный сервис! Езжу регулярно по работе. Цены адекватные, машины комфортные. Спасибо за надёжность!",
    },
    {
      name: "Елена Иванова",
      city: "Оренбург",
      rating: 5,
      text: "Очень удобно бронировать через WhatsApp. Всегда на связи, быстрое подтверждение. Доверяю только им.",
    },
  ];

  const faqs = [
    {
      question: "Как забронировать место?",
      answer:
        "Позвоните по телефону +7 (999) 123-45-67, напишите в WhatsApp или Telegram, либо заполните форму на сайте. Мы подтвердим бронирование в течение 15 минут.",
    },
    {
      question: "Нужна ли предоплата?",
      answer:
        "Предоплата не требуется. Оплата производится водителю при посадке наличными или по карте.",
    },
    {
      question: "Можно ли взять с собой багаж?",
      answer:
        "Да, багаж включён в стоимость билета. Каждому пассажиру доступно место в багажном отсеке. Крупногабаритный груз обсуждается отдельно.",
    },
    {
      question: "Что делать, если я опаздываю?",
      answer:
        "Сообщите нам как можно скорее. Мы постараемся подождать, но отправление строго по расписанию для комфорта всех пассажиров.",
    },
    {
      question: "Есть ли детские кресла?",
      answer:
        "Да, детские кресла предоставляются бесплатно по предварительному запросу при бронировании.",
    },
    {
      question: "Можно ли отменить бронирование?",
      answer:
        "Да, отмена бесплатна за 3 часа до отправления. Позвоните или напишите нам.",
    },
  ];

  const advantages = [
    {
      icon: <Car className="advantage-icon" />,
      title: "Собственный автопарк",
      description:
        "Современные комфортабельные микроавтобусы и минивэны",
    },
    {
      icon: <Clock className="advantage-icon" />,
      title: "Ежедневные рейсы",
      description:
        "Удобное расписание с вечерними отправлениями",
    },
    {
      icon: <Shield className="advantage-icon" />,
      title: "Безопасность",
      description:
        "Опытные водители, исправный транспорт, все документы",
    },
    {
      icon: <BadgeCheck className="advantage-icon" />,
      title: "С 2015 года",
      description:
        "Более 9 лет успешной работы и тысячи довольных клиентов",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Выберите маршрут",
      description:
        "Ознакомьтесь с расписанием и ценами на нужное направление",
    },
    {
      number: "02",
      title: "Забронируйте место",
      description:
        "Позвоните, напишите или заполните форму на сайте",
    },
    {
      number: "03",
      title: "Получите подтверждение",
      description:
        "Мы подтвердим бронь и сообщим детали посадки",
    },
    {
      number: "04",
      title: "Комфортная поездка",
      description:
        "Приезжайте за 10 минут до отправления и в путь!",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения бронирования.",
    );
    setFormData({ name: "", phone: "", route: "", date: "" });
  };

  return (
    <div className="orsk-kazan-site">
      <style>{`
        /* ============================================
           ORSK-KAZAN SITE STYLES
           ============================================ */
        
        .orsk-kazan-site {
          min-height: 100vh;
        }
        
        /* HEADER */
        .header {
          position: sticky;
          top: 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          z-index: var(--z-sticky);
        }
        
        .header-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: var(--space-4) var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-6);
        }
        
        .logo {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-extrabold);
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        
        .logo-icon {
          color: var(--brand-green-primary);
        }
        
        .header-nav {
          display: none;
          gap: var(--space-8);
        }
        
        @media (min-width: 1024px) {
          .header-nav {
            display: flex;
          }
        }
        
        .header-nav a {
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        
        .header-nav a:hover {
          color: var(--brand-green-dark);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        
        .phone-link {
          display: none;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          text-decoration: none;
        }
        
        @media (min-width: 768px) {
          .phone-link {
            display: flex;
          }
        }
        
        .phone-link .phone-icon {
          color: var(--brand-green-primary);
          width: 20px;
          height: 20px;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          border-radius: var(--radius-lg);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-decoration: none;
          white-space: nowrap;
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
        }
        
        .btn-primary:hover:not(:disabled) {
          background: var(--btn-primary-bg-hover);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        
        .btn-primary:active:not(:disabled) {
          background: var(--btn-primary-bg-active);
          transform: translateY(0);
        }
        
        .btn-secondary {
          background: var(--btn-secondary-bg);
          color: var(--btn-secondary-text);
          border: 1px solid var(--btn-secondary-border);
        }
        
        .btn-secondary:hover:not(:disabled) {
          background: var(--btn-secondary-bg-hover);
          border-color: var(--brand-green-primary);
        }
        
        .btn-ghost {
          background: transparent;
          color: var(--text-secondary);
          padding: var(--space-2);
        }
        
        .btn-ghost:hover:not(:disabled) {
          background: var(--btn-ghost-bg-hover);
        }
        
        .btn-sm {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
        }
        
        .btn-lg {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
        }
        
        .menu-toggle {
          display: flex;
          padding: var(--space-2);
        }
        
        @media (min-width: 1024px) {
          .menu-toggle {
            display: none;
          }
        }
        
        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 73px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary);
          padding: var(--space-6);
          z-index: var(--z-fixed);
          transform: translateX(100%);
          transition: transform var(--transition-base);
          overflow-y: auto;
        }
        
        .mobile-menu.open {
          transform: translateX(0);
        }
        
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        
        .mobile-nav a {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-medium);
          color: var(--text-primary);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-light);
        }
        
        /* CONTAINER */
        .container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding-left: var(--container-padding);
          padding-right: var(--container-padding);
        }
        
        /* SECTION */
        .section {
          padding: var(--space-16) 0;
        }
        
        .section-sm {
          padding: var(--space-12) 0;
        }
        
        .section-lg {
          padding: var(--space-20) 0;
        }
        
        @media (min-width: 1024px) {
          .section {
            padding: var(--space-20) 0;
          }
          
          .section-lg {
            padding: var(--space-24) 0;
          }
        }
        
        .section-white {
          background: var(--bg-primary);
        }
        
        .section-gray {
          background: var(--bg-secondary);
        }
        
        .section-green {
          background: var(--bg-tertiary);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }
        
        .section-title {
          margin-bottom: var(--space-4);
        }
        
        .section-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* HERO */
        .hero {
          background: linear-gradient(135deg, var(--brand-green-subtle) 0%, var(--bg-primary) 100%);
          padding: var(--space-20) 0;
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 1024px) {
          .hero {
            padding: var(--space-24) 0;
          }
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
        }
        
        .hero-container {
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .hero-title {
          margin-bottom: var(--space-6);
          line-height: var(--leading-tight);
        }
        
        .hero-description {
          font-size: var(--text-xl);
          color: var(--text-secondary);
          margin-bottom: var(--space-8);
          line-height: var(--leading-relaxed);
        }
        
        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 640px) {
          .hero-cta {
            flex-direction: row;
          }
        }
        
        .hero-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-12);
          text-align: center;
        }
        
        .hero-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
        }
        
        .hero-feature-icon {
          width: 48px;
          height: 48px;
          color: var(--brand-green-primary);
        }
        
        .hero-feature-title {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }
        
        .hero-feature-text {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        
        /* ADVANTAGES */
        .advantages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        
        @media (min-width: 640px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .advantages-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .advantage-card {
          text-align: center;
          padding: var(--space-6);
          background: var(--bg-primary);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          transition: all var(--transition-base);
        }
        
        .advantage-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-primary);
        }
        
        .advantage-icon {
          width: 48px;
          height: 48px;
          color: var(--brand-green-primary);
          margin: 0 auto var(--space-4);
        }
        
        .advantage-title {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-2);
        }
        
        .advantage-description {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* ROUTES */
        .routes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .routes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .routes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-8);
          }
        }
        
        .route-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          transition: all var(--transition-base);
        }
        
        .route-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-primary);
        }
        
        .route-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }
        
        .route-direction {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex: 1;
        }
        
        .route-city {
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--text-primary);
        }
        
        .route-arrow {
          color: var(--brand-green-primary);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-bold);
        }
        
        .route-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-4);
        }
        
        .route-info-item {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        
        .route-info-label {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          text-transform: uppercase;
          font-weight: var(--font-weight-medium);
        }
        
        .route-info-value {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }
        
        .route-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
        }
        
        .route-price-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        
        .route-price-old {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          text-decoration: line-through;
        }
        
        .route-price {
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--brand-green-primary);
        }
        
        .route-price-currency {
          font-size: var(--text-lg);
          margin-left: var(--space-1);
        }
        
        /* FLEET */
        .fleet-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        
        @media (min-width: 768px) {
          .fleet-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .fleet-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .fleet-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        
        .fleet-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .fleet-image {
          width: 100%;
          height: 240px;
          background: linear-gradient(135deg, var(--neutral-200) 0%, var(--neutral-300) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .fleet-image::before {
          content: '🚐';
          font-size: 80px;
          opacity: 0.5;
        }
        
        .fleet-content {
          padding: var(--space-6);
        }
        
        .fleet-header {
          margin-bottom: var(--space-4);
        }
        
        .fleet-type {
          font-size: var(--text-xs);
          color: var(--brand-green-dark);
          text-transform: uppercase;
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-2);
        }
        
        .fleet-name {
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: var(--space-3);
        }
        
        .fleet-specs {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }
        
        .fleet-spec {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        
        .fleet-features {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        
        .fleet-feature {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        
        .fleet-feature-icon {
          width: 16px;
          height: 16px;
          color: var(--brand-green-primary);
          flex-shrink: 0;
        }
        
        /* STEPS */
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          position: relative;
        }
        
        @media (min-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-6);
          }
          
          .steps-grid::before {
            content: '';
            position: absolute;
            top: 40px;
            left: 12.5%;
            right: 12.5%;
            height: 2px;
            background: var(--border-light);
            z-index: 0;
          }
        }
        
        .step-card {
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .step-number {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--space-4);
          background: var(--brand-green-primary);
          color: var(--text-inverse);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          font-family: var(--font-heading);
          box-shadow: var(--shadow-lg);
        }
        
        .step-title {
          font-size: var(--text-xl);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-3);
        }
        
        .step-description {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* BOOKING FORM */
        .booking-container {
          max-width: 600px;
          margin: 0 auto;
          background: var(--bg-primary);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-light);
        }
        
        .form-group {
          margin-bottom: var(--space-6);
        }
        
        .form-label {
          display: block;
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }
        
        .form-input,
        .form-select {
          width: 100%;
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-base);
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }
        
        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--brand-green-primary);
          background: var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .form-input::placeholder {
          color: var(--text-tertiary);
        }
        
        .form-button {
          width: 100%;
        }
        
        /* TESTIMONIALS */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .testimonial-card {
          background: var(--bg-primary);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          transition: all var(--transition-base);
        }
        
        .testimonial-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-primary);
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: var(--space-4);
        }
        
        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        
        .testimonial-name {
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }
        
        .testimonial-city {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }
        
        .testimonial-rating {
          display: flex;
          gap: var(--space-1);
        }
        
        .star {
          color: #FCD34D;
          font-size: var(--text-lg);
        }
        
        .testimonial-text {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* FAQ */
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        
        .faq-item {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-fast);
        }
        
        .faq-item.open {
          border-color: var(--brand-green-primary);
          box-shadow: var(--shadow-md);
        }
        
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          padding: var(--space-5);
          background: transparent;
          border: none;
          text-align: left;
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        
        .faq-question:hover {
          background: var(--bg-secondary);
        }
        
        .faq-icon {
          width: 20px;
          height: 20px;
          color: var(--brand-green-primary);
          transition: transform var(--transition-base);
          flex-shrink: 0;
        }
        
        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }
        
        .faq-item.open .faq-answer {
          max-height: 500px;
        }
        
        .faq-answer-content {
          padding: 0 var(--space-5) var(--space-5);
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* FOOTER */
        .footer {
          background: var(--neutral-900);
          color: var(--text-inverse);
          padding: var(--space-12) 0 var(--space-6);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          margin-bottom: var(--space-8);
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
        
        .footer-section h4 {
          color: var(--text-inverse);
          margin-bottom: var(--space-4);
        }
        
        .footer-description {
          font-size: var(--text-sm);
          color: var(--neutral-400);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-4);
        }
        
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        
        .footer-contact a {
          color: var(--neutral-300);
          font-size: var(--text-sm);
          transition: color var(--transition-fast);
        }
        
        .footer-contact a:hover {
          color: var(--brand-green-primary);
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        
        .footer-links a {
          color: var(--neutral-300);
          font-size: var(--text-sm);
          transition: color var(--transition-fast);
        }
        
        .footer-links a:hover {
          color: var(--brand-green-primary);
        }
        
        .footer-bottom {
          padding-top: var(--space-6);
          border-top: 1px solid var(--neutral-800);
          text-align: center;
        }
        
        .footer-copyright {
          font-size: var(--text-sm);
          color: var(--neutral-500);
        }
        
        /* SOCIAL BUTTONS */
        .social-buttons {
          display: flex;
          gap: var(--space-3);
        }
        
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          border-radius: var(--radius-lg);
          border: 1px solid;
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        
        .social-btn-whatsapp {
          background: #25D366;
          color: white;
          border-color: #25D366;
        }
        
        .social-btn-whatsapp:hover {
          background: #128C7E;
          border-color: #128C7E;
          transform: translateY(-1px);
        }
        
        .social-btn-telegram {
          background: #0088cc;
          color: white;
          border-color: #0088cc;
        }
        
        .social-btn-telegram:hover {
          background: #006699;
          border-color: #006699;
          transform: translateY(-1px);
        }
        
        /* BADGE */
        .badge {
          display: inline-flex;
          align-items: center;
          padding: var(--space-2) var(--space-3);
          background: var(--brand-green-light);
          color: var(--brand-green-dark);
          font-size: var(--text-xs);
          font-weight: var(--font-weight-semibold);
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }
        
        /* UTILITIES */
        .text-center {
          text-align: center;
        }
        
        .mb-0 {
          margin-bottom: 0 !important;
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            <Car className="logo-icon" size={28} />
            <span>Орск-Казань</span>
          </a>

          <nav className="header-nav">
            <a href="#routes">Маршруты</a>
            <a href="#fleet">Автопарк</a>
            <a href="#booking">Бронирование</a>
            <a href="#faq">Вопросы</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+79991234567" className="phone-link">
              <Phone className="phone-icon" />
              <span>+7 (999) 123-45-67</span>
            </a>
            <a
              href="https://wa.me/79991234567"
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              className="btn btn-ghost menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        >
          <nav className="mobile-nav">
            <a
              href="#routes"
              onClick={() => setMobileMenuOpen(false)}
            >
              Маршруты и цены
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
            >
              Наш автопарк
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
            >
              Забронировать
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
            >
              Вопросы и ответы
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <a
              href="tel:+79991234567"
              className="btn btn-primary"
            >
              <Phone size={20} />
              Позвонить
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Междугороднее такси между Орском, Оренбургом,
              Казанью и Набережными Челнами
            </h1>
            <p className="hero-description">
              Комфортные поездки на современных микроавтобусах.
              Ежедневные рейсы, фиксированные цены, опытные
              водители.
            </p>
            <div className="hero-cta">
              <a
                href="#booking"
                className="btn btn-primary btn-lg"
              >
                Забронировать место
              </a>
              <a
                href="tel:+79991234567"
                className="btn btn-secondary btn-lg"
              >
                <Phone size={20} />
                Позвонить
              </a>
            </div>

            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle className="hero-feature-icon" />
                <div className="hero-feature-title">
                  Ежедневные рейсы
                </div>
                <div className="hero-feature-text">
                  Удобное расписание
                </div>
              </div>
              <div className="hero-feature">
                <CheckCircle className="hero-feature-icon" />
                <div className="hero-feature-title">
                  Фиксированная цена
                </div>
                <div className="hero-feature-text">
                  Без доплат в пути
                </div>
              </div>
              <div className="hero-feature">
                <CheckCircle className="hero-feature-icon" />
                <div className="hero-feature-title">
                  Собственный парк
                </div>
                <div className="hero-feature-text">
                  Комфортный транспорт
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Почему выбирают нас
            </h2>
            <p className="section-subtitle">
              Мы обеспечиваем безопасные и комфортные поездки
              для тысяч пассажиров
            </p>
          </div>

          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                {advantage.icon}
                <h3 className="advantage-title">
                  {advantage.title}
                </h3>
                <p className="advantage-description mb-0">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Маршруты и расписание
            </h2>
            <p className="section-subtitle">
              Выберите удобное направление. Отправление каждый
              день по расписанию
            </p>
          </div>

          <div className="routes-grid">
            {routes.map((route, index) => (
              <div key={index} className="route-card">
                <div className="route-header">
                  <div className="route-direction">
                    <div className="route-city">
                      {route.from}
                    </div>
                    <div className="route-arrow">→</div>
                    <div className="route-city">{route.to}</div>
                  </div>
                </div>

                <div className="route-info">
                  <div className="route-info-item">
                    <div className="route-info-label">
                      Отправление
                    </div>
                    <div className="route-info-value">
                      {route.time}
                    </div>
                  </div>
                  <div className="route-info-item">
                    <div className="route-info-label">
                      В пути
                    </div>
                    <div className="route-info-value">
                      {route.duration}
                    </div>
                  </div>
                </div>

                <div className="route-footer">
                  <div className="route-price-container">
                    <div className="route-price-old">
                      {route.priceOld} ₽
                    </div>
                    <div className="route-price">
                      {route.price}
                      <span className="route-price-currency">
                        ₽
                      </span>
                    </div>
                  </div>
                  <a
                    href="#booking"
                    className="btn btn-primary"
                  >
                    Забронировать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Наш автопарк</h2>
            <p className="section-subtitle">
              Современные комфортабельные микроавтобусы и
              минивэны с кондиционером
            </p>
          </div>

          <div className="fleet-grid">
            {fleet.map((vehicle, index) => (
              <div key={index} className="fleet-card">
                <div className="fleet-image"></div>
                <div className="fleet-content">
                  <div className="fleet-header">
                    <div className="fleet-type">
                      {vehicle.type}
                    </div>
                    <h3 className="fleet-name">
                      {vehicle.name}
                    </h3>
                    <div className="fleet-specs">
                      <span className="fleet-spec">
                        {vehicle.seats}
                      </span>
                      <span className="fleet-spec">•</span>
                      <span className="fleet-spec">
                        {vehicle.comfort}
                      </span>
                    </div>
                  </div>
                  <div className="fleet-features">
                    {vehicle.features.map(
                      (feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="fleet-feature"
                        >
                          <CheckCircle className="fleet-feature-icon" />
                          <span>{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-green">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Как это работает</h2>
            <p className="section-subtitle">
              Простой процесс бронирования — всего за 4 шага
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description mb-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Забронировать место
            </h2>
            <p className="section-subtitle">
              Оставьте заявку, и мы свяжемся с вами для
              подтверждения
            </p>
          </div>

          <div className="booking-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="route" className="form-label">
                  Маршрут
                </label>
                <select
                  id="route"
                  className="form-select"
                  value={formData.route}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      route: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Выберите маршрут</option>
                  <option value="orsk-kazan">
                    Орск → Казань
                  </option>
                  <option value="kazan-orsk">
                    Казань → Орск
                  </option>
                  <option value="orenburg-kazan">
                    Оренбург → Казань
                  </option>
                  <option value="kazan-orenburg">
                    Казань → Оренбург
                  </option>
                  <option value="orsk-chelny">
                    Орск → Набережные Челны
                  </option>
                  <option value="chelny-orsk">
                    Набережные Челны → Орск
                  </option>
                  <option value="orenburg-chelny">
                    Оренбург → Набережные Челны
                  </option>
                  <option value="chelny-orenburg">
                    Набережные Челны → Оренбург
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  Дата поездки
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg form-button"
              >
                Отправить заявку
              </button>
            </form>

            <div
              style={{
                marginTop: "var(--space-6)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  marginBottom: "var(--space-4)",
                }}
              >
                Или свяжитесь с нами напрямую:
              </p>
              <div
                className="social-buttons"
                style={{ justifyContent: "center" }}
              >
                <a
                  href="https://wa.me/79991234567"
                  className="social-btn social-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/orskkazan"
                  className="social-btn social-btn-telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={18} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="section section-gray"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Отзывы наших пассажиров
            </h2>
            <p className="section-subtitle">
              Более 10 000 довольных клиентов за 9 лет работы
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-author">
                    <div className="testimonial-name">
                      {testimonial.name}
                    </div>
                    <div className="testimonial-city">
                      {testimonial.city}
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <p className="testimonial-text mb-0">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Часто задаваемые вопросы
            </h2>
            <p className="section-subtitle">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <div className="faq-container">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? "open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index ? null : index,
                      )
                    }
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className="faq-icon" />
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Орск-Казань</h4>
              <p className="footer-description">
                Междугородний трансфер между городами Орск,
                Оренбург, Казань и Набережные Челны. Комфортно,
                безопасно, надёжно с 2015 года.
              </p>
              <div className="social-buttons">
                <a
                  href="https://wa.me/79991234567"
                  className="social-btn social-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/orskkazan"
                  className="social-btn social-btn-telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={18} />
                  Telegram
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Контакты</h4>
              <div className="footer-contact">
                <a href="tel:+79991234567">
                  +7 (999) 123-45-67
                </a>
                <a href="mailto:info@orsk-kazan.ru">
                  info@orsk-kazan.ru
                </a>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--neutral-400)",
                  }}
                >
                  Работаем 24/7
                </p>
              </div>
            </div>

            <div className="footer-section">
              <h4>Маршруты</h4>
              <div className="footer-links">
                <a href="#routes">Орск — Казань</a>
                <a href="#routes">Оренбург — Казань</a>
                <a href="#routes">Орск — Наб. Челны</a>
                <a href="#routes">Оренбург — Наб. Челны</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Информация</h4>
              <div className="footer-links">
                <a href="#fleet">Автопарк</a>
                <a href="#booking">Бронирование</a>
                <a href="#testimonials">Отзывы</a>
                <a href="#faq">Вопросы и ответы</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2015–2026 Орск-Казань. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
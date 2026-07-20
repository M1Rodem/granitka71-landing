# Granitka71 Landing Architecture

## 1. Общая информация

Granitka71 Landing — это frontend-проект коммерческого landing page компании Granitka71.

Основная задача landing page:

- представить компанию и ее услуги в понятной маркетинговой структуре;
- дать пользователю удобную навигацию по ключевым разделам;
- подготовить интерфейс к дальнейшему наполнению контентом из CRM.

Landing не является CRM и не содержит административный функционал.

CRM существует как отдельный проект. На текущем этапе frontend использует foundation, layout и placeholder-структуру. На следующих этапах контент будет подключаться через CRM API без переписывания UI primitives и архитектурного каркаса.

## 2. Technology Stack

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- Framer Motion
- React Query
- React Hook Form
- Zod

## 3. FSD Structure

### `app`

Назначение:

- инициализация приложения;
- глобальные providers;
- router;
- layout;
- базовая конфигурация приложения;
- глобальные стили.

Что хранится:

- `providers/`
- `router/`
- `layout/`
- `config/`
- `styles/`

Что запрещено хранить:

- бизнес-секции landing;
- переиспользуемые UI primitives;
- бизнес-сущности.

### `pages`

Назначение:

- сборка страниц из widgets;
- подключение SEO на уровне страницы;
- композиция route-level структуры.

Что хранится:

- page-level composition;
- page-specific styles;
- page export points.

Что запрещено хранить:

- общий layout приложения;
- низкоуровневые UI primitives;
- repository logic;
- shared helpers.

### `widgets`

Назначение:

- крупные композиционные блоки интерфейса;
- независимые части страницы или layout shell.

Что хранится:

- `header/`
- `footer/`
- `navigation/`
- `landing-section/`

Что запрещено хранить:

- глобальные design tokens;
- app-level router and providers;
- page-level orchestration.

### `features`

Назначение:

- пользовательские сценарии и интерактивные use cases.

Что хранится:

- form flows;
- actions;
- isolated business interactions.

Что запрещено хранить:

- глобальные UI primitives;
- page shells;
- app bootstrap logic.

### `entities`

Назначение:

- бизнес-сущности проекта;
- типы, модели и структура данных домена.

Что хранится:

- `service`
- `gallery`
- `review`
- `faq`
- `contact`
- `media`
- `company`

Что запрещено хранить:

- layout widgets;
- page composition;
- shared design system primitives.

### `shared`

Назначение:

- общий код, не привязанный к бизнес-секции;
- foundation проекта;
- design system;
- motion, config, constants, repository interfaces, mocks и utilities.

Что хранится:

- `ui/`
- `theme/`
- `motion/`
- `config/`
- `constants/`
- `lib/`
- `api/`
- `repository/`
- `mocks/`
- `types/`
- `utils/`

Что запрещено хранить:

- page composition;
- widget-specific UI blocks;
- бизнес-логику landing sections.

## 4. Dependency Rules

Разрешенные зависимости:

- `pages -> widgets`
- `pages -> shared`
- `widgets -> features`
- `widgets -> entities`
- `widgets -> shared`
- `features -> entities`
- `features -> shared`
- `entities -> shared`
- `app -> pages/widgets/features/entities/shared`

Запрещенные зависимости:

- `shared -> pages`
- `shared -> widgets`
- `entities -> widgets`
- `entities -> pages`
- `features -> pages`
- `features -> app`
- `widgets -> pages`

Правило направления зависимостей:

- верхние слои собирают нижние;
- нижние слои не знают о верхних.

## 5. UI System

Проект использует foundation на базе `shared/ui`, `shared/theme` и `shared/motion`.

Состав UI system:

- design tokens через CSS variables;
- UI primitives в `shared/ui`;
- CSS Modules для локальной изоляции стилей;
- motion presets и transition tokens в `shared/motion`.

Правила создания компонентов:

- использовать только design tokens;
- не использовать magic numbers, если значение относится к дизайн-системе;
- использовать CSS Modules;
- сохранять минимальный API;
- поддерживать accessibility;
- не добавлять бизнес-логику в primitives;
- не создавать монолитные компоненты, если блок естественно делится по слоям.

## 6. Data Architecture

Сейчас проект использует mock data и repository foundation.

Текущий поток данных:

```text
Mock Data
  ↓
Repository
  ↓
Entities
  ↓
Widgets
  ↓
UI
```

Будущая схема:

```text
CRM API
  ↓
Repository
  ↓
Entities
  ↓
Widgets
  ↓
UI
```

UI и layout не должны зависеть от конкретного источника данных.

## 7. CRM Integration Strategy

Через CRM будут управляться:

- услуги;
- галерея;
- отзывы;
- контакты;
- Hero content.

Через CRM не будут управляться:

- application layout;
- визуальный дизайн;
- анимации;
- UI components;
- структура страниц;
- design tokens;
- navigation shell.

Интеграция должна подменять источник данных, а не перестраивать frontend-архитектуру.

## 8. Development Rules

- не создавать бизнес-логику в `shared`;
- использовать Design Tokens для системных значений;
- использовать CSS Modules для component styles;
- не создавать монолитные компоненты без необходимости;
- не добавлять библиотеки без явной необходимости;
- не нарушать FSD dependency direction;
- не переписывать foundation без отдельной задачи;
- не переносить widgets в `shared`;
- не связывать layout shell с CRM напрямую.

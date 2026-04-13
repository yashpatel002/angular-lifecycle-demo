# 🎯 Angular Component Lifecycle Hooks Demo

An interactive learning application to understand Angular component lifecycle hooks practically with real-time logging.

## 📚 What You'll Learn

This project demonstrates all 9 Angular lifecycle hooks with a 3-level component hierarchy (Parent → Child → Grandchild).

### Lifecycle Hooks Covered:

1. **ngOnChanges** - Triggers when @Input properties change
2. **ngOnInit** - Called after first ngOnChanges
3. **ngDoCheck** - Custom change detection logic
4. **ngAfterContentInit** - Content children initialized
5. **ngAfterContentChecked** - Content children checked
6. **ngAfterViewInit** - View and view children initialized
7. **ngAfterViewChecked** - View/view children checked
8. **ngOnDestroy** - Component destruction cleanup
9. **DoCheck** - Manual change detection hook

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open http://127.0.0.1:4233

## 💡 How to Use

1. Update the title input to trigger ngOnChanges
2. Click count button to modify the counter
3. Show/Hide child component to observe full lifecycle
4. Watch real-time logs of all lifecycle hooks

## 🎯 Features

✅ 3-level component hierarchy
✅ Real-time colored logs
✅ Interactive controls
✅ Content projection demo
✅ Beautiful responsive UI

## 📖 Learn More

- [Angular Lifecycle Hooks Docs](https://angular.io/guide/lifecycle-hooks)
- [Component Overview](https://angular.io/guide/component-overview)

## 👨‍💻 Author

Yash Patel - [@yashpatel002](https://github.com/yashpatel002)

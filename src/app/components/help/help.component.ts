import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="help-page">
      <div class="help-shell">
        <div class="help-header">
          <p class="eyebrow">Need assistance?</p>
          <h1>Help & Support</h1>
          <p class="subtitle">
            We’re here to help with orders, account issues, vendor questions, and campus marketplace support.
          </p>
        </div>

        <div class="help-grid">
          <section class="card contact-card">
            <h2>Send us a message</h2>

            <form class="help-form" (ngSubmit)="submitForm()">
              <div class="field-row">
                <label>
                  Full name
                  <input type="text" [(ngModel)]="form.name" name="name" placeholder="Your name" required />
                </label>
              </div>

              <div class="field-row">
                <label>
                  Email address
                  <input type="email" [(ngModel)]="form.email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <div class="field-row">
                <label>
                  Subject
                  <input type="text" [(ngModel)]="form.subject" name="subject" placeholder="How can we help?" required />
                </label>
              </div>

              <div class="field-row">
                <label>
                  Message
                  <textarea [(ngModel)]="form.message" name="message" rows="5" placeholder="Tell us what you need help with..." required></textarea>
                </label>
              </div>

              <div class="actions">
                <button type="submit" class="primary-btn">
                  {{ isSubmitting ? 'Sending...' : 'Submit request' }}
                </button>
                <a class="secondary-btn" [href]="mailtoLink">Mail us directly</a>
              </div>

              <p class="success-message" *ngIf="submitSuccess">
                Your message has been prepared and a mail app has been opened. We’ll get back to you soon.
              </p>
            </form>
          </section>

          <aside class="card info-card">
            <h2>Contact details</h2>

            <div class="info-item">
              <span class="icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:ktumarketplace@gmail.com">ktumarketplace&#64;gmail.com</a>
              </div>
            </div>

            <div class="info-item">
              <span class="icon">🕒</span>
              <div>
                <strong>Support hours</strong>
                <p>Mon - Sat, 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div class="info-item">
              <span class="icon">🏫</span>
              <div>
                <strong>Campus support</strong>
                <p>Student services and vendor assistance</p>
              </div>
            </div>

            <div class="quick-links">
              <a routerLink="/login">Login</a>
              <a routerLink="/register">Create account</a>
              <a routerLink="/cart">View cart</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: linear-gradient(135deg, #071522 0%, #0d1c2f 100%);
        color: #edf5ff;
        font-family: 'Segoe UI', sans-serif;
      }

      .help-page {
        padding: 48px 20px 72px;
      }

      .help-shell {
        max-width: 1100px;
        margin: 0 auto;
      }

      .help-header {
        text-align: center;
        margin-bottom: 32px;
      }

      .eyebrow {
        display: inline-block;
        color: #7cc8ff;
        text-transform: uppercase;
        letter-spacing: 1.4px;
        font-size: 12px;
        font-weight: 800;
        margin-bottom: 12px;
      }

      h1 {
        font-size: clamp(2.2rem, 4vw, 3.3rem);
        line-height: 1.1;
        margin: 0 0 10px;
      }

      .subtitle {
        max-width: 700px;
        margin: 0 auto;
        color: #c7d8ef;
        font-size: 1.02rem;
      }

      .help-grid {
        display: grid;
        grid-template-columns: 1.5fr 0.9fr;
        gap: 24px;
      }

      .card {
        background: rgba(15, 31, 49, 0.82);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 22px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
      }

      .contact-card,
      .info-card {
        padding: 28px;
      }

      h2 {
        margin: 0 0 20px;
        font-size: 1.5rem;
      }

      .help-form {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .field-row label {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #dfeafc;
        font-weight: 600;
      }

      input,
      textarea {
        width: 100%;
        padding: 14px 15px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.04);
        color: #edf5ff;
        font-size: 0.98rem;
        resize: vertical;
      }

      input::placeholder,
      textarea::placeholder {
        color: #8ea9c7;
      }

      input:focus,
      textarea:focus {
        outline: none;
        border-color: rgba(124, 200, 255, 0.9);
        box-shadow: 0 0 0 3px rgba(124, 200, 255, 0.18);
      }

      .actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 8px;
      }

      .primary-btn,
      .secondary-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border-radius: 12px;
        text-decoration: none;
        border: none;
        font-weight: 700;
        cursor: pointer;
        padding: 12px 18px;
        transition: transform 0.2s ease;
      }

      .primary-btn {
        background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
        color: white;
      }

      .secondary-btn {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: #edf5ff;
      }

      .primary-btn:hover,
      .secondary-btn:hover {
        transform: translateY(-1px);
      }

      .success-message {
        margin: 0;
        color: #9ce7b1;
        font-weight: 600;
      }

      .info-item {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        padding: 18px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .info-item:last-of-type {
        border-bottom: none;
      }

      .icon {
        width: 42px;
        height: 42px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: rgba(0, 212, 255, 0.12);
        font-size: 20px;
      }

      .info-item strong,
      .info-item p {
        display: block;
        margin: 0 0 4px;
      }

      .info-item a {
        color: #8ecfff;
        text-decoration: none;
      }

      .info-item p {
        color: #c7d8ef;
      }

      .quick-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 22px;
      }

      .quick-links a {
        padding: 10px 12px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #edf5ff;
        text-decoration: none;
        font-size: 0.92rem;
      }

      @media (max-width: 768px) {
        .help-grid {
          grid-template-columns: 1fr;
        }

        .contact-card,
        .info-card {
          padding: 20px 18px;
        }
      }
    `
  ]
})
export class HelpComponent {
  isSubmitting = false;
  submitSuccess = false;

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  get mailtoLink(): string {
    const subject = encodeURIComponent(this.form.subject || 'Support request');
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`
    );
    return `mailto:ktumarketplace@gmail.com?subject=${subject}&body=${body}`;
  }

  submitForm(): void {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      return;
    }

    this.isSubmitting = true;
    const saved = JSON.parse(localStorage.getItem('ktu-support-messages') || '[]');
    saved.unshift({
      ...this.form,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('ktu-support-messages', JSON.stringify(saved.slice(0, 20)));

    window.location.href = this.mailtoLink;

    this.submitSuccess = true;
    this.isSubmitting = false;
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}

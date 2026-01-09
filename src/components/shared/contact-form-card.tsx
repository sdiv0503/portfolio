"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";
import { sendMessage } from "@/actions/send-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle2, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactFormCard() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(data: ContactFormData) {
    startTransition(async () => {
      const result = await sendMessage(data);
      if (result.success) {
        setSuccess(true);
        form.reset();
      }
    });
  }

  return (
    <div className="h-full rounded-3xl border border-neutral-200 bg-white/50 p-8 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Send me a message</h3>
          <p className="text-sm text-muted-foreground">I usually reply within 24h.</p>
        </div>
      </div>

      {success ? (
        <div className="flex h-[300px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold">Sent!</h3>
          <p className="text-muted-foreground mb-6">I'll get back to you shortly.</p>
          <Button variant="outline" onClick={() => setSuccess(false)}>
            Send another
          </Button>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input
              {...form.register("name")}
              placeholder="Your Name"
              aria-label="Your Name"
              disabled={isPending}
              className="bg-background/50"
            />
            {form.formState.errors.name && (
              <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              {...form.register("email")}
              placeholder="your@email.com"
              aria-label="Your Email Address"
              type="email"
              disabled={isPending}
              className="bg-background/50"
            />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Textarea
              {...form.register("message")}
              placeholder="Project details..."
              aria-label="Message"
              className="min-h-[120px] resize-none bg-background/50"
              disabled={isPending}
            />
            {form.formState.errors.message && (
              <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}
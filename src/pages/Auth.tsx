
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate('/');
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-cricket-cream flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#B71C1C', // Updated to match the cricket-green color in tailwind config
                  brandAccent: '#D32F2F',
                },
              },
            },
          }}
          providers={['google']}
          redirectTo={window.location.origin}
          onlyThirdPartyProviders={false}
        />
      </Card>
    </div>
  );
};

export default AuthPage;

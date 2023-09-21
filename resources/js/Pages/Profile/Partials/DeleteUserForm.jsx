import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profilom törlése</h2>

                <p className="mt-1 text-sm text-gray-600">
                A fiók törlését követően az összes erőforrás és adat véglegesen törlődik. 
                Fiókja törlése előtt kérjük, töltsön le minden olyan adatot vagy információt, 
                amelyet meg szeretne megőrizni.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Profilom törlése</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                    A fiók törlését követően az összes erőforrás és adat véglegesen törlődik. 
                    Kérjük, adja meg jelszavát annak megerősítéséhez, hogy véglegesen törölni szeretné fiókját.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Jelszó"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Mégse</SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                        Profilom törlése
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}

PGDMP     .    -                y            agromercado    13.1    13.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16817    agromercado    DATABASE     `   CREATE DATABASE agromercado WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE agromercado;
                postgres    false            �            1259    25063    ordenes    TABLE     9   CREATE TABLE public.ordenes (
    id integer NOT NULL
);
    DROP TABLE public.ordenes;
       public         heap    postgres    false            �            1259    25061    ordenes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ordenes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ordenes_id_seq;
       public          postgres    false    206            �           0    0    ordenes_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ordenes_id_seq OWNED BY public.ordenes.id;
          public          postgres    false    205            �            1259    16843    palabras    TABLE     f   CREATE TABLE public.palabras (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL
);
    DROP TABLE public.palabras;
       public         heap    postgres    false            �            1259    16841    palabras_id_seq    SEQUENCE     �   CREATE SEQUENCE public.palabras_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.palabras_id_seq;
       public          postgres    false    202            �           0    0    palabras_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.palabras_id_seq OWNED BY public.palabras.id;
          public          postgres    false    201            �            1259    16818 	   productos    TABLE     �   CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre character varying(200) NOT NULL,
    cantidad integer NOT NULL,
    ruta character varying(200),
    precio double precision
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    25011    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(30) NOT NULL,
    psw character varying(30) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    25009    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    204            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    203            @           2604    25066 
   ordenes id    DEFAULT     h   ALTER TABLE ONLY public.ordenes ALTER COLUMN id SET DEFAULT nextval('public.ordenes_id_seq'::regclass);
 9   ALTER TABLE public.ordenes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206            >           2604    16846    palabras id    DEFAULT     j   ALTER TABLE ONLY public.palabras ALTER COLUMN id SET DEFAULT nextval('public.palabras_id_seq'::regclass);
 :   ALTER TABLE public.palabras ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    201    202            ?           2604    25014    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �          0    25063    ordenes 
   TABLE DATA           %   COPY public.ordenes (id) FROM stdin;
    public          postgres    false    206   �       �          0    16843    palabras 
   TABLE DATA           .   COPY public.palabras (id, nombre) FROM stdin;
    public          postgres    false    202   �       �          0    16818 	   productos 
   TABLE DATA           G   COPY public.productos (id, nombre, cantidad, ruta, precio) FROM stdin;
    public          postgres    false    200   �       �          0    25011    usuarios 
   TABLE DATA           2   COPY public.usuarios (id, email, psw) FROM stdin;
    public          postgres    false    204   [       �           0    0    ordenes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ordenes_id_seq', 1, false);
          public          postgres    false    205            �           0    0    palabras_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.palabras_id_seq', 39, true);
          public          postgres    false    201            �           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 1, true);
          public          postgres    false    203            H           2606    25068    ordenes ordenes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.ordenes
    ADD CONSTRAINT ordenes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.ordenes DROP CONSTRAINT ordenes_pkey;
       public            postgres    false    206            D           2606    16848    palabras palabras_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.palabras
    ADD CONSTRAINT palabras_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.palabras DROP CONSTRAINT palabras_pkey;
       public            postgres    false    202            B           2606    16822    productos productos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    200            F           2606    25016    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    204            �      x������ � �      �   �   x��M
�0���7��	�v�O��M@�B�n�RHpҀi��ҽ7��l������j�6�P���%oщ�q	++�
F�q}��;�Y���[�&%Q	�Q��9�q��!>��h\��I�@�����ο�n"��(�      �   �  x����n�0E�ԗ���^v
E��@�E�`L�2>>��_ߡ��	Х��Hs���̈�2H����R��7�6v`��Hk�m�g*�K�%�g�AF�6�g̀��׳��Z{�rW=� ŝ��)1maRL�ؕ3��{^f�|d�U(L�9A�/����o�Jo��F{�Ŭ��`�"��i��Q��tUG�X�$��G�6;�'��U���5�kF��UqI�����$8I۽i��z���E:��B;`�'L�ћ�ψfh>��zdRoUP_�o�4�=�p�e��w�f��Q��%7^��7���Cf��'�V���t�1�P"�����A!��?�E��F"����\ec,�>��E��NxJ��l��yL/�Zl��r�̧ VI�����]1�b�
yN �'�J��ZI�X�T{茣���D��7�B��$����[:����0z6`���6���;�7�+3a���mYb	��Jg�Z�c�+�I5�ڛP��C�%�g�8[��s���s�.Ή�ֻ[Y�mޫ�z���G�)�#e|d�:J?t�O���� ~���-��O������|�u��.�i���6��q�gk�����󞸲J��i%�cۯ��\U��f�oV��J_&���(��~�6�QIY(z�u|�<�}���V$y[���Q��ߦ�٭����UU�%��L      �   /   x�3�LI,*M��w�M���K���tL*J-I-N-N��7T����� �Y     